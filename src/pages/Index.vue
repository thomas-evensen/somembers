<template>
  <Layout>
    <section class="container w-full mt-20 mb-10 lg:my-10 lg:w-3/5 lg:mx-auto lg:text-center">
      <h1 class="font-sans text-4xl font-bold mb-4 lg:mb-2 leading-snug">Våre medlemmer</h1>
      <g-link
        class="inline-block bg-gray-800 text-white text-sm rounded py-1 px-2 mb-6"
        to="/teams"
        aria-label="Bytt til oversikt over medlemsbedrifter"
      >Se bedrifter</g-link>
      <div>
        <input
          class="font-sans mb-8 w-full md:w-64 border border-gray-500 rounded py-2 px-2 text-gray-800 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Søk"
          v-model="search"
          aria-label="Søk i medlemsoversikten"
        />
      </div>
      <label
        :aria-label="`Filtrer på medlemmer som jobber med ${tags.value}`"
        v-for="tags in tagItems"
        v-bind:key="tags.value"
        v-bind:style=" tags.checked ? 'color: #fff; background-color: #2b6cb0' : '' "
        :for="tags.value"
        class="cursor-pointer inline-block font-sans mr-2 border border-blue-700 rounded-full px-2 py-1 mb-4 text-sm text-blue-700 focus:outline-none"
      >
        <input v-model="tags.checked" type="checkbox" class="hidden" :id="tags.value" />
        {{tags.value}}
      </label>
    </section>

    <section class="members">
      <member-card v-for="item in filteredData" :key="item.node.id" :item="item"></member-card>
    </section>
  </Layout>
</template>

<page-query>
    query Members {
        posts: allMember(sort: [{ by: "priority", order: ASC }, { by: "created", order: DESC }]) {
            edges {
                node {
                    id
                    slug
                    name
                    image
                    created
                    priority
                    topics
                    team {
                        name
                    }
                }
            }
        }
    }
</page-query>

<script>
import MemberCard from "~/components/MemberCard";
import tags from "~/tags.js";

export default {
  metaInfo: {
    title: "SoMembers"
  },

  components: {
    "member-card": MemberCard
  },

  data() {
    return {
      search: "",
      tagItems: tags
    };
  },

  computed: {
    filteredData() {
      let filterData = [];
      let checkedData = [];
      return this.$page.posts.edges.filter(edge => {
        let foundName = this.searchName(edge);
        let foundTeam = this.searchTeam(edge);
        let foundTag = this.searchTag(edge);
        let result = false;

        if (!foundTag && this.search.length >= 0) {
          result = false;
        } else if (foundName || foundTeam) {
          result = true;
        }
        return result;
      });
    },
    selectTags() {
      let checkedTags = [];
      let filterTags = this.tagItems.filter(obj => obj.checked);
      filterTags.forEach(element => {
        checkedTags.push(element.value);
      });
      return checkedTags;
    }
  },
  methods: {
    searchName(obj) {
      return (
        obj.node.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      );
    },
    searchTeam(obj) {
      return (
        obj.node.team.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      );
    },
    searchTag(obj) {
      return this.selectTags.every(v => obj.node.topics.includes(v));
    }
  }
};
</script>

<style scoped>
.members {
  margin-top: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  justify-items: center;
  justify-content: space-evenly;
}
</style>