<template>
  <div class="card">
    <g-link :to="testing()" :aria-label="`Les mer om ${item.node.name}`">
      <img
        v-if="item.node.teamName"
        class="card-img w-full object-cover rounded-lg bg-white"
        v-lazy="item.node.image"
        :alt="`Bilde av ${item.node.name}`"
      />
      <img
        v-else
        class="card-img w-full object-contain rounded-lg bg-white"
        v-lazy="item.node.image"
        :alt="`Bilde av ${item.node.name}`"
      />
    </g-link>
    <div class="font-sans">
      <h2 class="text-2xl mt-3 -mb-1 font-semibold cutText">
        <g-link :to="item.node.slug" :aria-label="`Les mer om ${item.node.name}`">{{item.node.name}}</g-link>
      </h2>
      <h3 v-if="item.node.teamName" class="text-base cutText font-thin">{{ item.node.teamName }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    testing() {
      return this.item.node.teamName
        ? this.item.node.slug
        : "/teams/" + this.item.node.slug;
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
</style>
