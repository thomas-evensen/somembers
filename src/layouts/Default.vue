<template>
  <div>
    <header class="flex items-center w-full lg:w-3/5 lg:mx-auto">
      <g-link to="/" class="flex-1" aria-label="Gå til startsiden">
        <img class="w-32 md:w-40" src="../assets/logo.png" alt="SoCentral logo" />
      </g-link>
      <a
        class="bg-blue-700 text-white font-light py-2 px-4 rounded font-sans"
        href="https://www.socentral.no/inkubator"
        aria-label="Gå til SoCentral sin inkubatorside for å bli medlem"
      >Bli medlem</a>
    </header>
    <slot />
    <footer class="mx-auto mt-6 text-center">
      <a
        href="https://github.com/thomas-evensen/somembers"
        class="text-gray-700 font-light italic text-xs"
      >Source code at Github</a>
    </footer>
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
.animate-move {
  transition: all 0.3s ease-in-out;
}

.animate-leave-to,
.animate-enter {
  opacity: 0;
}

.animate-leave-active,
.animate-enter-active {
  transition: opacity 0.3s ease-out;
}

.animate-leave-active {
  z-index: -10;
}
</style>
