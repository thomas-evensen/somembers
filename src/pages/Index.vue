<template>
  <Layout>
    <section class="container w-full mt-20 mb-10 lg:my-10 lg:w-3/5 lg:mx-auto lg:text-center">
      <title-section text="Våre medlemmer"></title-section>
      <page-switch text="Se virksomheter" link="/teams"></page-switch>
      <input
        class="block lg:mx-auto font-sans mb-8 w-full md:w-64 border border-gray-500 rounded py-2 px-2 text-gray-800 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Søk"
        v-model="search"
        aria-label="Søk i medlemsoversikten"
      />

      <label
        :aria-label="`Filtrer på medlemmer som jobber med ${tag.value}`"
        v-for="tag in tagItems"
        v-bind:key="tag.value"
        v-bind:style=" tag.checked ? 'color: #fff; background-color: #2b6cb0' : '' "
        :for="tag.value"
        class="cursor-pointer inline-block font-sans mr-2 border border-blue-700 rounded-full px-2 py-1 mb-4 text-sm text-blue-700 focus:outline-none"
      >
        <input
          v-model="tag.checked"
          v-on:click="setTag(tag)"
          type="checkbox"
          class="hidden"
          :id="tag.value"
        />
        {{tag.value}}
      </label>
    </section>

    <transition-group tag="section" name="animate" class="cards">
      <profile-card v-for="item in filteredData" :key="item.node.id" :item="item"></profile-card>
    </transition-group>
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
                    teamName
                }
            }
        }
    }
</page-query>

<script>
import TitleSection from "~/components/TitleSection.vue";
import PageSwitch from "~/components/PageSwitch.vue";
import ProfileCard from "~/components/ProfileCard";

import tags from "~/tags.js";

export default {
  metaInfo: {
    title: "Hjem"
  },

  components: {
    "profile-card": ProfileCard,
    "title-section": TitleSection,
    "page-switch": PageSwitch
  },

  data() {
    return {
      search: "",
      tagItems: tags,
      activeTag: ""
    };
  },

  computed: {
    filteredData() {
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
    }
    /* 
    // BACKUP IN CASE MARIE WANTS TO FILTER ON MORE THAN ONE TOPIC
    selectTags() {
            let checkedTags = [];
      let filterTags = this.tagItems.filter(obj => obj.checked);
      filterTags.forEach(element => {
        checkedTags.push(element.value);
      });
      return checkedTags; 
    }*/
  },
  methods: {
    setTag(obj) {
      if (this.activeTag === obj.value) {
        obj.checked = false;
        this.activeTag = "";
      } else {
        for (let o of this.tagItems) {
          if (this.activeTag === o.value) {
            o.checked = false;
            break;
          }
        }
        this.activeTag = obj.value;
      }
    },
    searchName(obj) {
      return (
        obj.node.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      );
    },
    searchTeam(obj) {
      return (
        obj.node.teamName.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      );
    },
    searchTag(obj) {
      // BACKUP IN CASE MARIE WANTS TO FILTER ON MORE THAN ONE TOPIC
      //return this.selectTags.every(v => obj.node.topics.includes(v));
      //console.log(this.activeTag);

      return this.activeTag === ""
        ? true
        : obj.node.topics.includes(this.activeTag);
    }
  },
  created() {
    this.tagItems.forEach(o => {
      o.checked = false;
    });
  }
};
</script>

<style scoped>
</style>