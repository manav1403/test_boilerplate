import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { hide: ["sidenav"], fillHeight: true }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: { hide: ["sidenav", "app-bar"] }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: "/currenttarelease",
      name: "currenttarelease",
      component: CurrentRelease
    },
    {
      path: "/pasttarelease",
      name: "pasttarelease",
      component: PastRelease
    },
    {
      path: "/current",
      name: "current",
      component: Current,
      meta: { requiresAuth: true, taOnly: true }
    },
    {
      path: "/past",
      name: "past",
      component: Past,
      meta: { requiresAuth: true, taOnly: true }
    },
    {
      path: "/approve-current",
      name: "approve-current",
      component: ApproveCurrent,
      meta: { taSupervisorOnly: true }
    },
    {
      path: "/ta-assignments",
      name: "ta-assignments",
      component: TaAssignment,
      meta: { taCoordinatorOnly: true }
    },
    {
      path: "/assign",
      name: "assign",
      component: TACoordi,
      meta: { requiresAuth: true, taCoordinatorOnly: true }
    }
  ]
});

guards.forEach(guard => router.beforeEach(guard));

export default router;
