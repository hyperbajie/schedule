import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/index.scss'
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false

Vue.use(Element);

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
