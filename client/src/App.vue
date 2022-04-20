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
  background-image: url("./assets/img/spiral.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}
.back {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
