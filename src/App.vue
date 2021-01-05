<template>
  <div id="app">
    <NavBar></NavBar>
    <div class='container'>
    <router-view></router-view>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar.vue';
import Bottom from './components/layout/Bottom.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Bottom,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
