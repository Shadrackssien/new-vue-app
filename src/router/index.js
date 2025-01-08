import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AuthPage from "../pages/AuthPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
      meta: { layout: "DashboardLayout" },
    },
    {
      path: "/",
      name: "auth",
      component: AuthPage,
      meta: { layout: "AuthLayout" },
    },
  ],
});

export default router;
