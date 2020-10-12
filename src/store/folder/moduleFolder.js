import state from "./moduleFolderState.js";
import mutations from "./moduleFolderMutations.js";
import actions from "./moduleFolderActions.js";
import getters from "./moduleFolderGetters.js";

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
