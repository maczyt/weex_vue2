<template lang="html">
  <div class="">
  <router-link to="/home">Home</router-link>
  <router-link to="/user">User</router-link>

  <!-- 路由入口 -->
  <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = {
  template: '<h2>Home</h2>'
}
const User = {
  template: '<h2>User</h2>'
}
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/user',
    component: User
  }
]
const router = new VueRouter({
  routes
})

export default {
  name: 'Myapp',
  data () {
    return {
    }
  },
  router: router
}
</script>
