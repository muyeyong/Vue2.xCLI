import Vue from 'vue'
import "core-js/stable"
import "regenerator-runtime/runtime"
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'



Vue.config.productionTip = false
if (process.env.VUE_APP_MOCK) {
  // eslint-disable-next-line global-require
  require('../mock')
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
