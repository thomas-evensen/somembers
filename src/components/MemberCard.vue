<template>
  <div class="member">
    <g-link :to="item.node.slug" :aria-label="`Les mer om ${item.node.name}`">
      <img
        class="member-img w-full object-cover rounded-lg"
        v-lazy="item.node.image"
        :alt="`Bilde av ${item.node.name}`"
      />
    </g-link>
    <div class="font-sans">
      <h2
        class="text-2xl mt-3 -mb-1 font-semibold cutText"
        :to="item.node.slug"
        :aria-label="`Les mer om ${item.node.name}`"
      >
        <g-link :to="item.node.slug" :aria-label="`Les mer om ${item.node.name}`">{{item.node.name}}</g-link>
      </h2>
      <h3 class="text-base cutText font-thin">{{ item.node.team.name }}</h3>
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
  }
};
</script>

<style scoped>
.member {
  width: 320px;
}

.member-img {
  height: 320px;
}
</style>
