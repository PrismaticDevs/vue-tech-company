<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    13deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 11%,
    rgba(0, 212, 255, 1) 91%
  );
  height: 100vh;
  overflow: scroll;
}
</style>
