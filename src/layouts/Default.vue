<template>
  <div>
    <header>
      <a href="https://www.socentral.no">
        <img src="../assets/logo.png" width="150" />
      </a>
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

<style scoped>
header {
  height: 100px;
  width: 100%;
  position: relative;
  top: 25px;
  left: 25px;
}
</style>
