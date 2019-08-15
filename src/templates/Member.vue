<template>
  <Layout>
    <section
      class="container w-full mt-8 mb-10 lg:my-10 lg:w-3/5 mx-auto font-sans"
      aria-label="Gå tilbake til oversikten"
    >
      <div class="text-right">
        <g-link to="/" class="underline text-blue-700">Tilbake til medlemmer</g-link>
      </div>
      <h2 class="mt-10 text-4xl leading-snug font-bold">{{ $page.member.name }}</h2>
      <g-link
        :to="`teams/${$page.member.teamSlug}`"
        class="block mt-2 lg:mt-2 text-xl font-light underline"
        :aria-label="`Les mer om ${$page.member.teamName}`"
      >{{$page.member.teamName}}</g-link>

      <div class="lg:flex mt-8">
        <img class="rounded-lg object-cover card-img bg-white" :src="$page.member.image" />
        <p class="mt-8 lg:mt-0 lg:pl-5 leading-relaxed">{{ $page.member.bio }}</p>
      </div>

      <div class="mt-8">
        <span v-if="!$page.member.privacy.hideContactDetails">
          <a
            :href="`tel:${$page.member.phone}`"
            class="mr-2 inline-flex items-center bg-transparent text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded-full"
            aria-label="Ring med telefon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"
              />
            </svg>
          </a>
          <a
            :href="`mailto:${$page.member.email}`"
            class="mr-2 mt-4 lg:mt-0 inline-flex items-center bg-transparent text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded-full"
            aria-label="Send epost"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
              />
            </svg>
          </a>
        </span>

        <span v-if="!$page.member.privacy.hidePublicProfiles">
          <a
            v-if="$page.member.twitter"
            :href="`https://www.twitter.com/${$page.member.twitter}`"
            class="mr-2 inline-flex items-center bg-transparent text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded-full"
            aria-label="Se twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            v-if="$page.member.linkedin"
            :href="$page.member.linkedin"
            class="mt-4 lg:mt-0 inline-flex items-center bg-transparent text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded-full"
            aria-label="Se linkedin"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </span>
      </div>

      <div class="mt-8" v-if="$page.member.tags.length>0">
        <h3 class="text-lg mb-2 font-bold">Tags</h3>
        <span
          class="inline-block mt-2 mr-2 text-sm bg-gray-700 text-white py-2 px-4 rounded-full"
          v-for="tags in $page.member.tags"
          v-bind:key="tags"
        >{{tags}}</span>
      </div>

      <div class="mt-8" v-if="$page.member.topics.length>0">
        <h3 class="text-lg mb-2 font-bold">Temaer</h3>
        <span
          class="inline-block mt-2 mr-2 text-sm bg-gray-700 text-white py-2 px-4 rounded-full"
          v-for="topics in $page.member.topics"
          v-bind:key="topics"
        >{{topics}}</span>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Member ($id: String!){
  member(id: $id) {
    name
    image
    bio
    tags
    twitter
    linkedin
    email
    phone
    privacy {
      hideContactDetails
      hidePublicProfiles
    }
    teamName
    teamSlug
    topics
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Medlem"
  }
};
</script>

<style>
.card-img {
  height: 320px;
  width: 320px;
}
</style>