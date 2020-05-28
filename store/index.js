export const state = () => ({ error: null })
export const getters = {
  state: (state) => state.error
}
export const mutations = {
  setError({ state }, payload) {
    state.error = payload
  }
}
export const actions = {}
