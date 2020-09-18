<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MovieAPI from "./services/api";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
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
  color: $base-color;
  margin-top: 60px;
}
body {
  background-color: $base-color;
}
</style>
