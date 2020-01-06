const state = {
    slot: ['11','21','31']
 }

 const getters = {
    getSlot(state: Object){
        return state.slot;
    }
 }


 const actions = {

 }

 const  mutations = {

 }

 const slot = {
    namespaced: true,
     state,
     getters,
     actions,
     mutations
 }

 export default slot

