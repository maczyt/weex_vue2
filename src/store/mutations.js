import * as types from './mutation-types'

export default {
  [types.INCREMENT_PAGE] (state) {
    state.page ++
  },
  [types.DECREMENT_PAGE] (state) {
    if (state.page <= 1) return
    state.page --
  },
  [types.INIT_PAGE] (state) {
    state.page = 1
  }
}
