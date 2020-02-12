import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/programmation",
    name: "programmation",
    redirect: { name: "construction" }
  },
  {
    path: "/videos",
    name: "videos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Videos.vue")
  },
  {
    path: "/a-propos",
    name: "a propos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/construction",
    name: "construction",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Construction.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
