<template>
  <div id="app">
    <Login v-if="$store.getters.userIsAuthenticated === false" />
    <div v-else>
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Login from "./views/LoginView.vue";

export default {
  components: {
    Navbar,
    Login,
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-image: url(./assets/background.png) !important;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  // min-height: 100vh;
  // max-height: 130vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
