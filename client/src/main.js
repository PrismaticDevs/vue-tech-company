import Vue from 'vue'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue-3'


createApp(App).use(router).mount("#app");
import "bootstrap/dist/js/bootstrap.min.js";