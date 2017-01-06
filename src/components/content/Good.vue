<template>
  <my-content :contents="contents"></my-content>
</template>
<style>
</style>
<script>
  import MyContent from './Content'
  export default {
    data () {
      return {
        contents: []
      }
    },
    mounted () {
      this.$http.get('http://www.weex.help/api/v1/topics?tab=good&page=1').then(
        function (response) {
          this.contents = response.body.data
        },
        function (err) {
          throw err
        }
      )
    },
    components: {
      MyContent
    }
  }
</script>
