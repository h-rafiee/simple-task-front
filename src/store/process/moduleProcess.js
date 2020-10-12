import state from "./moduleProcessState.js";
import mutations from "./moduleProcessMutations.js";
import actions from "./moduleProcessActions.js";
import getters from "./moduleProcessGetters.js";

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
