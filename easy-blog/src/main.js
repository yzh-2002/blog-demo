import Vue from "vue";
import App from "./App.vue";
import router from "./router";

<<<<<<< HEAD
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;
=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
>>>>>>> eba33623b52b70aede3ff13cd17889d4d635e0e0

Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
