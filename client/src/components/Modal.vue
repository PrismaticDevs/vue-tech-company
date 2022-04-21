<template>
  <section id="modal" v-if="modal">
    <article class="p-3 bg-primary">
      <h1 class="text-center text-white">{{ title }}</h1>
      <h2 class="text-center text-white">{{ subtitle }}</h2>
      <p class="text-center text-white">{{ paragraph }}</p>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" @click="close" class="btn btn-warning">
          Close
        </button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modal: true,
    };
  },
  methods: {
    close() {
      this.modal = false;
      location.reload();
    },
  },
  props: {
    title: String,
    subtitle: String,
    paragraph: String,
  },
};
</script>

<style scoped>
#modal {
  z-index: 1;
  width: 30%;
  height: 30%;
  position: absolute;
  left: 35vw;
  top: 35vh;
}
</style>
