<template>
  <div>
    <header class="flex items-center w-full lg:w-3/5 lg:mx-auto">
      <a class="flex-1" href="https://www.socentral.no" aria-label="Gå til SoCentral sin nettside">
        <img class="w-32 md:w-40" src="../assets/logo.png" alt="SoCentral logo" />
      </a>
      <div>
        <a
          class="bg-blue-700 text-white font-light py-2 px-4 rounded font-sans"
          href="https://www.socentral.no/inkubator"
          aria-label="Gå til SoCentral sin inkubatorside for å bli medlem"
        >Bli medlem</a>
      </div>
    </header>
    <slot />
    <div class="mx-auto mt-6 text-center">
      <a
        href="https://github.com/thomas-evensen/somembers"
        class="text-gray-600 font-light italic text-xs"
      >Source code at Github</a>
    </div>
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
</style>
