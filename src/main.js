import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLoading from 'vuejs-loading-plugin'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueLoading, {
  dark: true,
  text: 'Starwars Loading!'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
