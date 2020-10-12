import Vue from "vue";
import Router from "vue-router";

import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";

import store from "./store/store.js";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },

    // otherwise redirect to home
    { path: "*", redirect: "/" },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.auth.isUserLoggedIn();

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  if (!authRequired && loggedIn) {
    return next("/");
  }

  next();
});

export default router;
