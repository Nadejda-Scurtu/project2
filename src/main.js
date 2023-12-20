import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router.js";
import store from "./store";

import VueCarousel from "vue-carousel";
import { ModalPlugin } from "bootstrap-vue";
import "./fonts/GTWalsheimPro-Regular.woff";
import "./fonts/GTWalsheimPro-Medium.woff";
import "./fonts/GTWalsheimPro-Light.woff";
import "./fonts/GTWalsheimPro-Black.woff";
import "./fonts/GTWalsheimPro-MediumOblique.woff";
import "./fonts/GTWalsheimPro-RegularOblique.woff";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueCarousel);
Vue.use(ModalPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
