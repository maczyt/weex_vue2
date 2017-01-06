<template>
  <div class="header">
    <div class="container">
      <a href="/" class="brand"><img src="../assets/logo.png"/></a>
      <form id="search_form" action="/action" @submit.prevent="handlerSubmit">
        <input class="search" v-model="search">
      </form>
      <ul class="links">
        <li><a>首页</a></li>
        <li><a>新手入门</a></li>
        <li><a>注册</a></li>
        <li><a>登陆</a></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
  $color: rgba(0, 0, 255, .4);
  .header {
    width: 100%;
    padding: 5px 0;
    background-color: #fff;
  }
  .brand {
    display: block;
    float: left;
    width: 120px;
    height: 28px;
    padding: 8px 20px;
    font-size: 0;
    margin-left: -20px;
    img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
      border: 0;
      line-height: 1;
    }
  }
  #search_form {
    margin-top: 6px;
  }
  .search {
    display: block;
    float: left;
    font-size: 13px;
    margin-top: 2px;
    width: 206px;
    padding: 3px 5px 3px 22px;
    border-radius: 15px;
    line-height: 1.5;
    outline: none;
    border: none;
    background: #ccc url("../assets/search.png") 4px 4px no-repeat;
    transition: all .5s;
    &:focus {
      background-color: #fff;
      box-shadow: 0 0 8px $color;
    }
  }
  .links {
    float: right;
    margin-top: 8px;
    font-size: 0;
    li {
      display: inline-block;
      margin: 0 8px;
      a {
        font-size: 13px;
        cursor: pointer;
        &:hover {
          color: $color;
        }
      }
    }
  }
</style>
<script>
  export default {
    name: 'Header',
    data () {
      return {
        search: ''
      }
    },
    methods: {
      handlerSubmit (e) {
        var url = `https://www.google.com.hk/#hl=zh-CN&q=site:weex.help+${this.search}`
        window.location.href = url
        // e.returnValue = true
      }
    }
  }
</script>
