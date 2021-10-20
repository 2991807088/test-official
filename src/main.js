import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css' /* css初始化*/
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
