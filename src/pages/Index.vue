<template>
    <Layout>
        <section class="card">
            <ul>
                <li v-for='edge in $page.posts.edges' :key="edge.node.id">
                    <g-link :to="edge.node.slug">
                        <figure>
                            <img v-if="edge.node.image" v-lazy="edge.node.image" :alt="`Bilde av ${edge.node.name}`" />
                            <g-image v-else src="../assets/default-profile.png" :alt="`Bilde av ${edge.node.name}`" />
                            <figcaption>
                                <h1 class="cutText">{{ edge.node.name }}</h1>
                                <h3 class="cutText">{{ edge.node.team.name }}</h3>
                            </figcaption>
                        </figure>
                    </g-link>
                    <div v-if="edge.node.image" v-bind:style="{ 'background': 'url('+ edge.node.image +') no-repeat center center/cover' }"></div>
                    <div v-else style="background: url('../assets/default-profile.png') no-repeat center center/cover"></div>
                </li>
            </ul>
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
    bio
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
.card {
    padding: 2rem;
}

.card>ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    justify-items: center;
    justify-content: space-evenly;

}

.card>ul>li {
    width: 300px;
    height: 400px;
    border-radius: .5rem;
    background-color: #fff;
    /*box-shadow: 0 10px 15px -3px rgba(0, 255, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);*/
    position: relative;
}

.card>ul>li>div {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 2.5%;
    /*left: calc(5% / 2);*/
    z-index: -1;
    border-radius: 50px;
    /*background: url('https://images.pexels.com/photos/2613349/pexels-photo-2613349.jpeg') no-repeat center center/cover;*/
    filter: blur(10px);
}

.card>ul>li>a>figure {
    overflow: hidden;
    position: relative;
    border-radius: .5rem;

}

.card>ul>li>a>figure:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background: rgb(255, 255, 255);
    background: rgb(255, 255, 255);
    background: -moz-radial-gradient(circle, rgba(255, 255, 255, 0) 70%, rgba(0, 0, 0, 0.35) 100%);
    background: -webkit-radial-gradient(circle, rgba(255, 255, 255, 0) 70%, rgba(0, 0, 0, 0.35) 100%);
    background: radial-gradient(circle, rgba(255, 255, 255, 0) 70%, rgba(0, 0, 0, 0.35) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#000000", GradientType=1);
}

.card>ul>li>a>figure>img {
    width: 100%;
    object-fit: cover;
    height: 400px;
}

.card>ul>li>a>figure>figcaption {
    padding: .75rem;
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: -moz-linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0) 100%);
    background: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(255, 255, 255, 0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000", endColorstr="#ffffff", GradientType=1);
    width: 100%;
}

h1,
h3 {
    font-family: 'Open Sans', 'Source Sans Pro', sans-serif;
    color: #fff;
    line-height: 1.5rem;
}

h1 {
    font-size: 1.5rem;
    font-weight: 700;
}

h3 {
    font-weight: 300;
}
</style>