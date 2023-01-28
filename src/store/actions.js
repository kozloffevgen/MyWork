import ApiManager from "@/plugins/ApiManager";

const api = new ApiManager();

export default {
  async putData({ state, dispatch }, data) {
    api.options.content = [data, ...state.dataCards.content];
    api.options.sha = state.dataCards.sha;
    await api.put();

    dispatch('fetchData');
  },
  async fetchData({ commit }) {
    const data = await api.get();
      
    commit('getData', data)
  }
}