// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'SoMembers',
    siteUrl: 'https://medlemmer.socentral.no',
    plugins: [{
            use: 'gridsome-plugin-tailwindcss',
        },
        {
            use: 'gridsome-plugin-matomo',
            options: {
                host: 'https://matomo.socentral.no',
                siteId: 2,
                disableCookies: true
            }
        }
    ],
    templates: {
        Member: '/:slug',
        Team: '/teams/:slug',
    }
};
