<template>
  <my-content :contents="contents" :page="page"></my-content>
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
    computed: {
      page () {
        var page = this.$store.state.page
        this.$http.get(`http://www.weex.help/api/v1/topics?tab=good&page=${page}`).then(
          function (response) {
            this.contents = response.body.data
          },
          function (err) {
            throw err
          }
        )
        return page
      }
    },
    mounted () {
      this.$store.dispatch('init')
      this.$http.get('http://www.weex.help/api/v1/topics?tab=good').then(
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
