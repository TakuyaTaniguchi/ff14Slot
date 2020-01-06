// import axios from 'axios'

// const state = {
//   results: [],
//   loading: false,
// }

// const getters = {
//   results(state) {
//     return state.results
//   },
//   loading(state) {
//     const loading: boolean = state.loading
//     return loading
//   },
// }

// const actions = {
//   async doSearch({ commit }: any, keyword: String) {
//     const word = keyword
//     const key = 'V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E'
//     const limit = 3
//     const url = `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=${key}&limit=${limit}`
//     commit('setLoading', true)
//     const results = await axios.get(url)
//     const data = results.data.data
//     const imageUrls = data.map(images => images.images.downsized.url)
//     commit('setLoading', false)
//     commit('setResults', imageUrls)
//   },
// }

// const mutations = {
//   setResults(state, results) {
//     state.results = results
//   },
//   setLoading(state, bool) {
//     state.loading = bool
//   },
// }

// const search = {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations,
// }

// export default search
