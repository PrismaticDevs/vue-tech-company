<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title text-black">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
      <p class="card-text text-black">
        {{ desc }}
      </p>
      <div class="justify-content-center d-flex">
        <router-link
          :to="{ path: `/pricing` }"
          class="btn btn-outline-secondary card-link"
        >
          Pricing
        </router-link>
        <router-link
          :to="{ path: `/orders` }"
          class="btn btn-outline-secondary card-link"
        >
          Order
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    subtitle: String,
    desc: String,
    link1: String,
    link2: String,
  },
};
</script>

<style></style>
