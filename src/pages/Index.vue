<template>
    <Layout>
        <div class="flex flex-wrap w-full">

            <section v-for="edge in $page.posts.edges" :key="edge.node.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 overflow-hidden">
    
                <g-link :to="`member/${edge.node.id}`" class="glink mb-4">
                    <img v-if="edge.node.image" :src="edge.node.image" class="object-cover profileImg" :alt="`Bilde av ${edge.node.name}`" />
                    <img v-else src="../assets/default-profile.png" class="object-cover profileImg" :alt="`Bilde av ${edge.node.name}`" />
                </g-link>
                
                    <h1 class="font-bold text-xl px-5">
                        <g-link :to="`member/${edge.node.id}`">{{ edge.node.name }}</g-link>
                    </h1>
        
                    <p class="cutText text-gray-700 text-base px-5 mb-10">
                        {{edge.node.team.name}}
                    </p>

            </section>

        </div>
    </Layout>
</template>
<page-query>
    query Members {
    posts: allMember(sortBy: "priority", order: ASC) {
    edges {
    node {
    id
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
export default {
    metaInfo: {
        title: 'SoMembers'
    }
}
</script>
<style>
.glink {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-color: rebeccapurple;
}

.profileImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}
</style>