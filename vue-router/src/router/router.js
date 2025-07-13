import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";
import About from "../components/About.vue";
import Blog from "../components/Blog.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/Contact",
    component: Contact
  },
  {
    path: "/blog",
    component: Blog
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
