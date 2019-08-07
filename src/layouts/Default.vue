<template>
  <div>
    <header class="flex items-center w-full lg:w-3/5 lg:mx-auto">
      <a class="flex-1" href="https://www.socentral.no">
        <img class="w-32 md:w-40" src="../assets/logo.png" />
      </a>
      <div>
        <g-link
          class="bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded"
          to="/teams"
        >Se bedrifter</g-link>
      </div>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>



<style>
body {
  background-color: rgb(250, 250, 250);
  padding: 25px;
}
</style>
