<template>
  <div id="app">
    <my-header></my-header>
    <my-main></my-main>
  </div>
</template>

<script>
import 'normalize.css';
import MyHeader from './components/Header';
import MyMain from './components/Main';

export default {
  name: 'app',
  components: {
    MyHeader,
    MyMain,
  },
};
</script>

<style lang="scss">
  html, body {
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #e1e1e1;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0 !important;
  }
  ul, li {
    list-style: none;
    margin: 0;
  }
  a {
    cursor: pointer;
  }
  .container {
    width: 1024px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    &::after {
      content: '';
      display: block;
      height: 0;
      visibility: hidden;
      clear: both;
    }
  }
</style>
