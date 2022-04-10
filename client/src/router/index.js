import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/Services.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () =>
      import(/* webpackChunkName: "software" */ "../views/Pricing.vue"),
  },
  {
    path: "/orders",
    name: "orders",
    component: () =>
      import(/* webpackChunkName: "software" */ "../views/Orders.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
