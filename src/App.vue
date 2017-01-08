<template>
  <div id="app">
    <my-header></my-header>
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import 'normalize.css'
import '../static/style/Common.scss'
import MyHeader from './components/Header'
import MyMain from './components/Main'
import MyFooter from './components/Footer'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * Content components
 */

import All from './components/content/All'
import Good from './components/content/Good'
import Ask from './components/content/Ask'
import Share from './components/content/Share'
import Job from './components/content/Job'

const routes = [
  {
    path: '/all',
    component: All
  }, {
    path: '/good',
    component: Good
  }, {
    path: '/ask',
    component: Ask
  }, {
    path: '/share',
    component: Share
  }, {
    path: '/job',
    component: Job
  }
]

const linkActiveClass = 'active'
const router = new VueRouter({
  routes,
  linkActiveClass
})

export default {
  name: 'app',
  data () {
    return {
      contents: []
    }
  },
  components: {
    MyHeader,
    MyMain,
    MyFooter
  },
  router,
  mounted () {
    if (/#\/$/.test(window.location.hash)) {
      this.$router.push('all')
    }
  }
}
</script>
