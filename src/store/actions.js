export default {
  increment (context) {
    context.commit('INCREMENT_PAGE')
  },
  decrement (context) {
    context.commit('DECREMENT_PAGE')
  },
  init (context) {
    context.commit('INIT_PAGE')
  }
}
