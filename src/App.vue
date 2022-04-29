<template>
  <div id="app">
    <div id="nav">
      <a><router-link to="/home">Home</router-link> | </a>
      <a><router-link to="/workspace">Workspace</router-link> | </a>
      <a class="abandon"><router-link to="/task">Task</router-link></a>
    </div>
    <router-view class="content" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#nav {
  background: var(--color-common5);
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  box-sizing: border-box;
}

#nav a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: var(--color-white);
}

.content {
  height: calc(100% - 40px);
  background-color: var(--color-common4);
}
</style>
