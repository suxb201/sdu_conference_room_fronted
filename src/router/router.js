import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "../layout/Layout";
import Oops404 from "@/views/Oops404";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      component: () => import("@/views/Login")
    },
    {
      path: "/404",
      component: Oops404
    },
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          redirect: "/state"
        },
        {
          path: "state",
          component: () => import("@/views/ViewState")
        },
        {
          path: "my-apply",
          component: () => import("@/views/ViewMyApply")
        },
        {
          path: "submission",
          component: () => import("@/views/ViewSubmission")
        },
        {
          path: "add-room",
          component: () => import("@/views/ViewAddRoom")
        }
      ]
    },
    {
      path: "*",
      component: Oops404
    }
  ]
});
