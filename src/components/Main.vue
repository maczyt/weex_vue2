<template>
  <div class="main container">
    <div class="sidebar">
      <div class="panel"></div>
    </div>
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
<style lang="scss">
  a {
    text-decoration: none;
  }
  .main {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .sidebar {
    float: right;
    .panel {
      width: 290px;
      height: 50px;
      background-color: #85afde;
      margin-bottom: 15px;
      border-radius: 3px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .content {
    margin-right: 305px;
    border-radius: 3px;
    padding-bottom: 2px;
    background-color: #fff;
    .link-router {
      background-color: #f6f6f6;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      padding: 3px 15px;
      font-size: 15px;
      line-height: 2;
      a {
        font-size: 14px;
        display: inline-block;
        padding: 2px 4px;
        line-height: 1;
        border-radius: 3px;
        color: blueviolet;
        &:hover {
          color:  adjust-hue(blueviolet, 30deg);
        }
        &.active {
          background-color: blueviolet;
          color: #fff;
        }
      }
    }
    .list {
      padding: 0;
      li {
        display: flex;
        padding: 10px 8px;
        align-items: center;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          background-color: #f6f6f6;
        }
      }
      .meta {
        width: 70px;
      }
      .avator {
        font-size: 0;
        margin-right: 10px;
        img {
          width: 30px;
          height: auto;
        }
      }
      .comments {
        color: blueviolet;
        margin-right: 3px;
        font-size: 15px;
        line-height: 1.1;
      }
      .watcher {
        color: #aaa;
        margin-left: 3px;
        font-size: 13px;
      }
      .label {
        display: block;
        font-style: normal;
        font-size: 12px;
        padding: 2px 3px;
        color: #999;
        background-color: #e5e5e5;
        border-radius: 3px;
        margin: 0 10px;
        &.special {
          background-color: dodgerblue;
          color: #fff;
        }
      }
      .title {
        display: block;
        &:hover {
          text-decoration: underline;
        }
        flex-grow: 1;
      }
      time {
        font-size: 12px;
        color: #666;
        display: block;
        width: 50px;
        text-align: right;
      }
    }
    .pages {
      padding: 0 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        flex-grow: 1;
        height: 35px;
        line-height: 35px;
        text-align: center;
      }
      .prev {
        text-align: left;
      }
      .next {
        text-align: right;
      }
    }
  }
</style>
<script type="text/javascript">
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
    }
  }
</script>
