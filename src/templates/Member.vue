<template>
  <Layout>
      <h2>
        {{ $page.member.name }}
      </h2> 
  </Layout>
</template>

<page-query>
query Member ($id: String!){
  member(id: $id) {
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