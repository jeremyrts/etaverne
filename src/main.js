import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadScript from "vue-plugin-load-script";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebookSquare, faInstagram, faDiscord, faTools);
Vue.component("FontAwesomeIcon", FontAwesomeIcon); // Give a better component name

Vue.use(LoadScript);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
