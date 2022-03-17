import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "transaction.index",
      component: () => import("../views/transaction/Index.vue"),
    },
    {
      path: "/create",
      name: "transaction.create",
      component: () => import("../views/transaction/Create.vue"),
    },
    {
      path: "/edit/:id",
      name: "transaction.edit",
      component: () => import("../views/transaction/Edit.vue"),
    },
  ],
});

export default router;
