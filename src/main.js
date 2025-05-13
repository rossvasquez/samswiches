import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { createPinia } from "pinia";

import App from "./App.vue";
import Menu from "./Menu.vue";
import Item from "./Item.vue";

import "./style.css";

const routes = [
  { path: "/", redirect: "/menu" },
  { path: "/menu", component: Menu },
  { path: "/item/:id", component: Item },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
