<template>
  <div id="app">
    <header>
      <router-link to="/Portfolio">Portfolio</router-link>
      <br>
      <router-link to="/Biography">Bio</router-link>
    </header>

    <router-view></router-view>

    <footer>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style lang="css">
  @import 'C:\Users\dakon\Documents\portfolio\style.css';
</style>
