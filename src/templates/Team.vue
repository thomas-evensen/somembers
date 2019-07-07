<template>
  <Layout>

      <h2>
        {{ $page.team.name }}
      </h2>

  </Layout>
</template>

<page-query>
query Team ($id: String!){
  team(id: $id) {
    name
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Details'
  }
}
</script>

<style>

</style>