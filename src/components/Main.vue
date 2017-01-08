<template lang="html">
  <div class="main container">
    <Sidebar></Sidebar>
    <div class="content">
      <div class="link-router">
        <router-link to="/all">全部</router-link>
        <router-link to="/good">精华</router-link>
        <router-link to="/share">分享</router-link>
        <router-link to="/ask">问答</router-link>
        <router-link to="/job">招聘</router-link>
      </div>

      <router-view></router-view>
      <ul class="pages clearfix">
        <li class="prev"><a @click="handlePrev">上一页</a></li>
        <li>{{ page }}</li>
        <li class="next"><a @click="handleNext">下一页</a></li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
  import '../../static/style/Main.scss'
  import Sidebar from './Sidebar'

  export default {
    data () {
      return {
        contents: []
      }
    },
    computed: {
      page () {
        return this.$store.state.page
      }
    },
    methods: {
      handlePrev () {
        this.$store.dispatch('decrement')
      },
      handleNext () {
        this.$store.dispatch('increment')
      }
    },
    components: {
      Sidebar
    }
  }
</script>
