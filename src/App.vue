<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ key }}
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  computed: {
    key() {
      return process.env.VUE_APP_OPEN_MOVIE_API_KEY;
    },
  },
  created() {
    console.log(process.env);
  },
};
</script>

<style lang="scss">
$base-color: #c6538c;

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
