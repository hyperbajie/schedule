<template>
  <div id="app">
    <NavBar id="nav" />
    <router-view class="main-container" />
  </div>
</template>

<script>
import NavBar from "@/components/base/nav-bar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.main-container {
  height: calc(100% - 40px);
  background-color: var(--color-common4);
}
</style>
