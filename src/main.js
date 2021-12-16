import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import JQuery from "jquery";
window.$ = JQuery;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
