<template>
  <div class="main container">
    <div class="sidebar">
      <div class="panel"></div>
    </div>
    <div class="content">
      <div class="link-router">
        <a class="active">全部</a>
        <a>精华</a>
        <a>分享</a>
        <a>问答</a>
        <a>招聘</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
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
    height: 200px;
    background-color: #7cdea7;
    border-radius: 3px;
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
      /*height: 30px;*/
    }
  }
</style>
<script>
  export default {
  };
</script>
