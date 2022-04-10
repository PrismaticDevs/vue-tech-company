<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
      <p class="card-text">
        {{ desc }}
      </p>
      <router-link :to="{ path: `/pricing` }" class="card-link"
        ><button type="button" class="btn btn-outline-secondary">
          Pricing
        </button>
      </router-link>
      <router-link :to="{ path: `/orders` }" class="card-link"
        ><button type="button" class="btn btn-outline-secondary">Order</button>
      </router-link>
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
