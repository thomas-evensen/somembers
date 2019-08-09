<template>
  <!--   <div class="card">
    <g-link :to="item.node.slug" :aria-label="`Les mer om ${item.node.name}`">
      <figure>
        <img v-lazy="item.node.image" :alt="`Bilde av ${item.node.name}`" />
        <figcaption class="font-sans text-white w-11/12">
          <h2 class="cutText text-2xl font-bold">{{ item.node.name }}</h2>
          <h3 class="cutText text-lg font-light">{{ item.node.team.name }}</h3>
        </figcaption>
      </figure>
    </g-link>
     <div
      v-bind:style="{ 'background': 'url('+ item.node.image +') no-repeat center center/cover' }"
    ></div>
  </div>-->

  <g-link class="card" :to="item.node.slug" :aria-label="`Les mer om ${item.node.name}`">
    <img
      class="card-img w-full object-cover rounded-lg"
      v-lazy="item.node.image"
      :alt="`Bilde av ${item.node.name}`"
    />
    <div class="card-title font-sans">
      <h2
        class="text-3xl mt-3 -mb-1 font-base cutText"
        :to="item.node.slug"
        :aria-label="`Les mer om ${item.node.name}`"
      >{{item.node.name}}</h2>
      <h3 class="text-base cutText font-thin">{{ item.node.team.name }}</h3>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    // this component expects a prop of type object
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  width: 320px;
}

.card-img {
  height: 320px;
}

.card-line {
  height: 1px;
  width: 50px;
  background-color: #1f1f1f;
}

/* .card {
  width: 300px;
  height: 400px;
  border-radius: 1rem;
  position: relative;
-webkit-box-shadow: 0px 7px 15px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 7px 15px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 7px 15px 0px rgba(0, 0, 0, 0.4);
}

.card > a > figure {
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
}

.card > a > figure:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: rgb(255, 255, 255);
  background: rgb(255, 255, 255);
  background: -moz-radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 70%,
    rgba(0, 0, 0, 0.35) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 70%,
    rgba(0, 0, 0, 0.35) 100%
  );
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 70%,
    rgba(0, 0, 0, 0.35) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#000000", GradientType=1);
}

.card > a > figure > img {
  width: 100%;
  object-fit: cover;
  height: 400px;
}

.card > a > figure > figcaption {
  padding: 1rem;
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000", endColorstr="#ffffff", GradientType=1);
  width: 100%;
} */

/* .card > div {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 2.5%;
  z-index: -1;
  border-radius: 1rem;
  filter: blur(10px);
} */
</style>
