import router from "@/router/router.js";
import store from "@/store/store.js";
import NProgress from "nprogress"; // Progress 进度条
import "@/css/nprogress.css"; // Progress 进度条样式
// import Cookie from "js-cookie";

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else if (store.state.user.sid === "") {
    store.dispatch("login", { to: to }).catch(e => {
      console.log(e);
      next("/login");
    });
  } else {
    NProgress.start();
    // console.log(store.state.app.s1);
    if (!store.state.app.s1) store.dispatch("getRooms");
    if (!store.state.app.s2) store.dispatch("getMyApply");
    if (!store.state.app.s3) store.dispatch("getSubmission");
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});
