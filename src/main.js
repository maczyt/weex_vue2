// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
// import MyApp from './MyApp'

import store from './store'

Vue.use(VueResource)

// Vue.http.options.xhr = { withCredentials: true }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  // components: { App }
  ...App,
  // ...MyApp,
  store
})
