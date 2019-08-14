<template>
  <Layout>
    <section
      class="container w-full mt-8 mb-10 lg:my-10 lg:w-3/5 mx-auto font-sans"
      aria-label="Gå tilbake til oversikten"
    >
      <div class="text-right">
        <g-link to="/" class="underline text-blue-700">Tilbake til oversikt</g-link>
      </div>
      <h2 class="mt-10 text-4xl leading-snug font-bold">{{ $page.team.name }}</h2>

      <div class="lg:flex mt-8">
        <img class="rounded-lg object-cover card-img" :src="$page.team.logo" />
        <p class="mt-8 lg:mt-0 lg:pl-5 leading-relaxed">{{ $page.team.bio }}</p>
      </div>

      <div class="mt-8">
        <a
          v-if="$page.team.url"
          :href="`${$page.team.url}`"
          class="mr-2 inline-flex items-center bg-transparent text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded-full"
          aria-label="Besøk hjemmeside"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
            />
          </svg>
        </a>

        <span v-if="!$page.team.privacy.hidePublicProfiles">
          <a
            v-if="$page.team.twitter"
            :href="`https://www.twitter.com/${$page.team.twitter}`"
            class="mr-2 inline-flex items-center bg-transparent text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded-full"
            aria-label="Se twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
        </span>
      </div>

      <div class="mt-8" v-if="$page.team.topics.length>0">
        <h3 class="text-lg mb-2 font-bold">Temaer</h3>
        <span
          class="inline-block mt-2 mr-2 text-sm bg-gray-700 text-white py-2 px-4 rounded-full"
          v-for="topics in $page.team.topics"
          v-bind:key="topics"
        >{{topics}}</span>
      </div>

      <div class="mt-8">
        <h3 class="text-lg mb-2 font-bold">Ansatte</h3>
        <span
          class="inline-block mt-2 mr-2 text-sm bg-gray-700 text-white py-2 px-4 rounded-full"
          v-for="members in $page.team.teamMembers.members"
          v-bind:key="members.slug"
        >{{members.name}}</span>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Team ($id: String!){
  team(id: $id) {
    name
    logo
    bio
    url
    twitter
    privacy {
      hideContactDetails
      hidePublicProfiles
    }
    topics
    teamMembers {
      members {
        name
        slug
        image
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Team"
  }
};
</script>

<style>
.card-img {
  height: 320px;
  width: 320px;
}
</style>