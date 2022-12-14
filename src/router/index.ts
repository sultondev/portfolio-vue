import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import BlogView from "@/views/BlogView.vue"
import ToolsView from "@/views/ToolsView.vue"
import InterestsView from "@/views/InterestsView.vue"
import ComingSoon from "@/views/ComingSoon.vue"
import PortfolioView from "@/views/PortfolioView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/interests",
      name: "interests",
      component: InterestsView,
    },
    {
      path: "/tools",
      name: "tools",
      component: ToolsView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "ComingSoon",
      component: ComingSoon,
    },
    {
      path: "/portfolios",
      name: "Portfolio",
      component: PortfolioView,
    },

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
})

export default router
