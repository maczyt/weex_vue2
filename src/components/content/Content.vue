<template lang="html">
  <ul class="list">
    <li v-for="content in contents">
      <a class="avator">
        <img :src="content.author.avatar_url"/>
      </a>
      <div class="meta">
        <span class="comments">{{ content.reply_count }}</span>
        /
        <span class="watcher">{{ content.visit_count }}</span>
      </div>
      <i v-if="content.good || content.top" class="label special">{{ content.top ? '置顶' : '精华' }}</i>
      <i v-else class="label">问答</i>
      <a class="title">{{ content.title }}</a>
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
