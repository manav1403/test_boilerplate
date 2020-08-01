import axios from "axios";
import router from "../router";
import store from "../store";

const httpClient = axios.create({
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken"
});

httpClient.interceptors.response.use(
  response => response,
  error => {
    if (
      error.response.status === 401 &&
      router.currentRoute.name !== "login" &&
      router.currentRoute.meta.requiresAuth
    ) {
      store.dispatch("auth/logout");
      router.push({ name: "login" });
    } else {
      return Promise.reject(error);
    }
  }
);

export { httpClient };

export default {
  install(Vue) {
    Vue.prototype.$httpClient = httpClient;
  }
};
