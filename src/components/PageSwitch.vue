<template>
  <g-link
    class="inline-block bg-gray-800 text-white text-sm rounded py-1 px-2 mb-6"
    :to="link"
    aria-label="Bytt til oversikt over medlemsbedrifter"
  >{{text}}</g-link>
</template>

<script>
export default {
  props: {
    link: String,
    text: String
  }
};
</script>

<style>
</style>
