<template>
  <Layout>
  	<section>
      <h2>
        {{ $page.member.name }}
      </h2> 
       <img v-if="$page.member.image" :src="$page.member.image" class="object-cover" />
       <img v-else src="../assets/default-profile.png" class="object-cover" />
       <p>
       	{{ $page.member.bio }}
       </p>
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
    team {
    name
    image
    _id
	}
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