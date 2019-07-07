<template>
    <Layout>
        <div class="flex flex-wrap w-full overflow-hidden">
            <section v-for="edge in $page.posts.edges" :key="edge.node.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 bg-gray-200">
                <g-link :to="`member/${edge.node.id}`" class="height:400px">
                    <img v-if="edge.node.image" :src="edge.node.image" class="object-cover" :alt="`Bilde av ${edge.node.name}`" />
                    <img v-else src="../assets/default-profile.png" class="object-cover" :alt="`Bilde av ${edge.node.name}`" />
                </g-link>
                <h1>
                    <g-link :to="`member/${edge.node.id}`">{{ edge.node.name }}</g-link>
                </h1>
                <p class="cutText">
                    {{edge.node.team.name}}
                </p>
            </section>
        </div>
    </Layout>
</template>
<page-query>
    query Members {
    posts: allMember(sortBy: "created", order: DESC) {
    edges {
    node {
    id
    name
    image
    created
    team {
    name
    }
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
.memberImage {

    object-fit: cover;
}
</style>