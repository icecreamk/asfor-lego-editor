import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../components/Home.vue";
import Editor from "../views/Editor.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/editor", component: Editor, name: "editor" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
