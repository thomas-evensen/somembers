<template>
  <Layout>
    <section class="top">
      <h1>Våre medlemmer</h1>
      <nav>
        <g-link to="/">Medlemmer</g-link>
        <g-link to="/teams">Virksomheter</g-link>
      </nav>
      <nav>Tag1 Tag2 Tag 3</nav>

      <form>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter keyword  ..."
              v-model="search"
              v-on:keyup="getfilteredData"
            />
          </div>
        </div>
      </form>
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

export default {
  metaInfo: {
    title: "SoMembers"
  },
  components: {
    "member-card": MemberCard
  },
  computed: {
    selectedFilters: function() {
      let filters = [];
      let checkedFilters = this.stacks.filter(obj => obj.checked);
      checkedFilters.forEach(element => {
        filters.push(element.value);
      });
      return filters;
    }
  },
  data() {
    return {
      filteredData: [],
      search: "",
      stacks: [
        {
          checked: false,
          value: "language"
        },
        {
          checked: false,
          value: "framework"
        },
        {
          checked: false,
          value: "frontend"
        },
        {
          checked: false,
          value: "backend"
        },
        {
          checked: false,
          value: "mobile"
        },
        {
          checked: false,
          value: "web"
        },
        {
          checked: false,
          value: "hybrid"
        },
        {
          checked: false,
          value: "database"
        }
      ]
    };
  },
  methods: {
    getfilteredData: function() {
      this.filteredData = this.$page.posts.edges;
      console.log(this.filteredData[0].node.name);
      let filteredDataByfilters = [];
      let filteredDataBySearch = [];
      // first check if filters where selected
      /*       if (this.selectedFilters.length > 0) {
        filteredDataByfilters= this.filteredData.filter(obj => this.selectedFilters.every(val => obj.stack.indexOf(val) >= 0));
        this.filteredData = filteredDataByfilters;
      } */
      // then filter according to keyword, for now this only affects the name attribute of each data
      if (this.search !== "") {
        filteredDataBySearch = this.filteredData.filter(
          obj => obj.node.name.indexOf(this.search.toLowerCase()) >= 0
        );
        this.filteredData = filteredDataBySearch;
      }
    }
  },
  mounted() {
    this.getfilteredData();
  }
};
</script>

<style scoped>
.top {
  height: 300px;
  width: 100%;
}

.members {
  padding: 0.5rem;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  justify-items: center;
  justify-content: space-evenly;
}
</style>