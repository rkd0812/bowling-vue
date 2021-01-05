<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container">
      <router-view />
    </div>
    <copy-right></copy-right>
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar.vue';
import CopyRight from './components/layout/CopyRight.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    CopyRight,
  },
};
</script>

<style>

</style>
