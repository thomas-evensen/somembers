<template>
  <div>
    <header>
      <strong>
        <a href="https://www.socentral.no">{{ $static.metaData.siteName }}</a>
      </strong>
      <nav>
        <g-link to="/">Medlemmer</g-link>
        <g-link to="/teams">Virksomheter</g-link>
      </nav>
    </header>
    <slot/>
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
