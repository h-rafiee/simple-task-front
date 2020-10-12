export default {
  ADD_ITEM(state, item) {
    state.folder.unshift(item);
  },
  SET_ITEMS(state, folder) {
    state.folder = folder;
  },
};
