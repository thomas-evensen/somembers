<template>
  <Layout>
    
    <div v-for="edge in $page.posts.edges" :key="edge.node.OID">
      <g-image :src="edge.node.image" />
      <h1>{{ edge.node.name }}</h1>
    </div>

  </Layout>
</template>

<page-query>
query Members {
  posts: allMember(sortBy: "created", order: DESC) {
    edges {
      node {
        name
        image
        created
        OID
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'SoMembers'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
