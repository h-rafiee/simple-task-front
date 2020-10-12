import state from "./moduleFileState.js";
import mutations from "./moduleFileMutations.js";
import actions from "./moduleFileActions.js";
import getters from "./moduleFileGetters.js";

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
