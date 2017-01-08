<template>
  <div id="topic">
    <my-header></my-header>
    <div class="container main">
      <div class="topic">
        <div class="title">
          <i v-if="topic.good || topic.top" class="label special">{{ topic.top ? '置顶' : '精华' }}</i>
          <i v-else class="label">问答</i>
          <h2>{{ topic.title }}</h2>
        </div>
        <ul class="info">
          <li>发布于 {{ moment(topic.create_at).fromNow() }}</li>
          <li>作者 {{ JSON.stringify(topic.author) }}</li>
          <li>4168 次浏览</li>
          <li>来自 分享</li>
        </ul>
        <p class="topic-content" v-html="topic.content"></p>
      </div>
      <div class="comments">
        <h2>{{ topic.reply_count }} 回复</h2>
        <ul>
          <li class="clearfix" v-for="(reply, index) in topic.replies">
            <img :src="reply.author.avatar_url">
            <div class="infos">
              <span class="name">{{ reply.author.loginname }}</span>
              <a>{{ index+1 }}楼~{{ moment(reply.create_at).fromNow() }}</a>
              <p class="content" v-html="reply.content"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import 'normalize.css'
import '../static/style/Topic.scss'
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
import Vue from 'vue'
import VueResource from 'vue-resource'
import moment from 'moment'

moment.locale('zh-cn')
Vue.use(VueResource)

export default {
  data () {
    return {
      topic: {}
    }
  },
  methods: {
    moment: moment
  },
  components: {
    MyHeader,
    MyFooter
  },
  mounted () {
    var postId = window.location.search.slice(4)
    this.$http.get(`http://www.weex.help/api/v1/topic/${postId}`).then(
      function (response) {
        this.topic = response.body.data
      },
      function (err) {
        throw err
      }
    )
  }
}
</script>
