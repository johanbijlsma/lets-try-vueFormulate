import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueFormulate);
Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
