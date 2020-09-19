<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import MovieAPI from "./services/api";

export default {
  name: "App",
  async created() {
    const a = await MovieAPI.searchByTitle("shrek");
    console.log("a", a);
  },
};
</script>

<style lang="scss">
$base-color: white;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body {
  background-color: $base-color;
}
</style>
