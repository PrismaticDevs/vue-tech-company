<template>
  <section>
    <h1 class="text-center">Services</h1>
    <div class="justify-content-evenly d-flex">
      <Card
        class="card"
        title="Hardware"
        subtitle="Repair and Maintenance"
        desc="Testing and repair of computer hardware components, such as hard drives, monitors, and wiring components."
      />
      <Card
        class="card"
        title="Software"
        subtitle="Dedicated Engineering"
        desc="We have a team of software engineers that are available to develop custom software for your business."
      />
      <Card
        class="card"
        title="Web Design"
        subtitle="Building and Styling of Web Pages."
        desc="We can design web pages that work with your company's software to display and interact with user data."
      />
    </div>
  </section>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.card {
  box-shadow: 1em 1em 1em 1em rgba(0, 0, 0, 0.5);
}
</style>
