<template>
  <div class="layout">
    <header class="header">
      <strong>
        <a href="https://www.socentral.no">{{ $static.metaData.siteName }}</a>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Medlemmer</g-link>
        <g-link class="nav__link" to="/teams">Virksomheter</g-link>
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
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
