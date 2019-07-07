// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');
const oauth = require('axios-oauth-client');

module.exports = function(api) {
    api.loadSource(async store => {

        // Get OAuth 2 token
        const getClientCredentials = await oauth.client(axios.create(), {
            url: process.env.API_TOKEN_URL,
            grant_type: 'client_credentials',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            scope: 'officernd.api.read'
        });

        const auth = await getClientCredentials();

        // Create API token
        const headerAuth = `Bearer ${auth.access_token}`;

        // Get member data
        const { data: member } = await axios.get(process.env.API_MEMBERS_URL, {
            headers: {
                Authorization: headerAuth
            }
        });

        // Get team data
        const { data: team } = await axios.get(process.env.API_TEAMS_URL, {
            headers: {
                Authorization: headerAuth
            }
        });

        // create members collection
        const members = store.addContentType({
            typeName: 'Member',
            route: "member/:id"
        })

        // create teams collection
        const teams = store.addContentType({
            typeName: 'Team',
            route: "team/:id"
        })

        // function to fix image urls

        const setPriority = url => {

            let priority = 3;

            if (typeof url == "string") {
                priority = url.match(/^\/\//i) ? 1 : 2;
                priority = url.match(/^https:\/\/pbs.twimg.com/i) ? 1 : 2;
            }
            return priority;
        };

        const fixImageUrl = (url, isMember) => {

            //let fixedUrl = isMember ? "~/assets/default-profile.png" : "~/assets/default-team.png";
           
            if (typeof url == "string") {
                const tmpUrl = url.replace(/^\/\//i, "https://");
                fixedUrl = tmpUrl.replace("http:", "https:");
                return fixedUrl
            }
            return;
        };

        const isProfileHidden = item => {

            // checks if the object exist as it registers as undefined if the user hasn't logget into the portal
            if (typeof item === "undefined") {
                return false;
            } else {
                return hide = item.hide ? true : false;
                //return hide;
            }
            return false;
        }

        const getPrivacyOptions = item => {

            let obj = {}

            // checks if the object exist as it registers as undefined if the user hasn't logget into the portal
            if (typeof item === "undefined") {
                obj.hideContactDetails = false;
                obj.hidePublicProfiles = false;
                return obj;
            } else {
                obj.hideContactDetails = item.hideContactDetails ? true : false;
                obj.hidePublicProfiles = item.hidePublicProfiles ? true : false;
                return obj;
            }
        }


        // store data in members collection by iterating member data
        for (const item of member) {

            // skip member if privacy is set to hidden
            if (isProfileHidden(item.portalPrivacy)) { continue }

            // gets the privacy options
            const privacyOptions = getPrivacyOptions(item.portalPrivacy);

            // edit the image urls to all start with https://      
            //const memberImgUrl = fixImageUrl(item.image, true);

            // find member team and relevant values 
            let teamProps = {};
            for (const tItem of team) {
                if (tItem._id == item.team) {
                    teamProps.name = tItem.name;
                    teamProps.logo = tItem.image;//fixImageUrl(tItem.image, false);
                    teamProps.OID = tItem._id;
                    break;
                }
            }

            let memberPriority = setPriority(item.image);
console.log(memberPriority);
            // add values to the members collection
            members.addNode({
                OID: item._id,
                name: item.name,
                email: item.email,
                phone: item.phone,
                image: item.image, //memberImgUrl,
                priority: memberPriority,
                tags: item.tags,
                created: item.createdAt,
                bio: item.description,
                customProps: item.properties,
                twitter: item.twitterHandle,
                linkedin: item.linkedin,
                privacy: privacyOptions,
                team: teamProps
            });

        }

        // store data in teams collection by iterating team data
        for (const item of team) {

            // skip team if privacy is set to hidden
            if (isProfileHidden(item.portalPrivacy)) { continue }

            // gets the privacy options
            const privacyOptions = getPrivacyOptions(item.portalPrivacy);

            // edit the image urls to all start with https://      
            //const teamImgUrl = fixImageUrl(item.image, false);

            // find team members and relevent values
            const memberProps = {};
            memberProps.members = [];
            for (const mItem of member) {
                // skip the iteration if the member privacy is set to hidden
                if (isProfileHidden(mItem.portalPrivacy)) { continue }

                if (mItem.team == item._id) {
                    memberProps.members.push({
                        name: mItem.name,
                        image: mItem.image, //fixImageUrl(mItem.image, true),
                        OID: mItem._id
                    });
                }
            }

            teams.addNode({
                OID: item._id,
                name: item.name,
                start: item.startDate,
                bio: item.description,
                twitter: item.twitterHandle,
                email: item.email,
                url: item.url,
                logo: item.image, //teamImgUrl,
                tags: item.tags,
                customProps: item.properties,
                privacy: privacyOptions,
                teamMembers: memberProps
            })
        }

    })
}