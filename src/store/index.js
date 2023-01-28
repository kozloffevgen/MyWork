import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';

export const state = {
  dataCards: [],
}

export default createStore({
  state,
  actions,
  mutations,
})