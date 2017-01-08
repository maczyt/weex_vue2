<template lang="html">
  <ul class="list">
    <li v-for="content in contents">
      <a class="avator">
        <img :src="content.author.avatar_url" :title="content.author.loginname"/>
      </a>
      <div class="meta">
        <span class="comments" title="回复数">{{ content.reply_count }}</span>
        /
        <span class="watcher" title="点击数">{{ content.visit_count }}</span>
      </div>
      <i v-if="content.good || content.top" class="label special">{{ content.top ? '置顶' : '精华' }}</i>
      <i v-else class="label">问答</i>
      <a class="title" :title="content.title" :href="'http://localhost:8080/topic.html?id=' + content.id">{{ content.title }}</a>
      <time>{{ moment(content.last_reply_at).fromNow() }}</time>
    </li>
  </ul>
</template>

<script>
import moment from 'moment'
moment.locale('zh-cn')

export default {
  methods: {
    moment: moment
  },
  props: ['contents']
}
</script>
