<template>
  <div class="card">
    <g-link :to="item.node.slug">
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
  </div>
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
  width: 300px;
  height: 400px;
  border-radius: 1rem;
  position: relative;
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
}

.card > div {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 2.5%;
  z-index: -1;
  border-radius: 1rem;
  filter: blur(10px);
}
</style>
