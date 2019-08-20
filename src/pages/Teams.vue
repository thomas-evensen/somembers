<template>
  <Layout>
    <section class="container w-full mt-20 mb-10 lg:my-10 lg:w-3/5 lg:mx-auto lg:text-center">
      <title-section text="Våre virksomheter"></title-section>
      <page-switch text="Se medlemmer" link="/"></page-switch>
      <input
        class="block lg:mx-auto font-sans mb-8 w-full md:w-64 border border-gray-500 rounded py-2 px-2 text-gray-800 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Søk"
        v-model="search"
        aria-label="Søk i oversikten over virksomheter"
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
        posts: allTeam(sort: [{ by: "priority", order: ASC }, { by: "created", order: DESC }]) {
            edges {
                node {
                    id
                    slug
                    name
                    image
                    created
                    priority
                    topics
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
    title: "Virksomheter"
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
        let foundTag = this.searchTag(edge);
        let result = false;

        if (!foundTag && this.search.length >= 0) {
          result = false;
        } else if (foundName) {
          result = true;
        }
        return result;
      });
    }
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
    searchTag(obj) {
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