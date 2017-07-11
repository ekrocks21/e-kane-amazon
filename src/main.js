// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './App'
import { routes } from './routes'

Vue.use(VueRouter)

Vue.use(Vuetify)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
