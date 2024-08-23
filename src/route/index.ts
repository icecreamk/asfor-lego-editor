import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
} from "vue-router";

import Home from "../components/Home.vue";
import TemplateDetail from "../components/TemplateDetail.vue";
import Editor from "../views/Editor.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/editor", component: Editor, name: "editor" },
  { path: "/template/:id", component: TemplateDetail, name: "templateDetail" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
