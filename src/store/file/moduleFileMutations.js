export default {
  ADD_ITEM(state, item) {
    state.file.unshift(item);
  },
  SET_ITEMS(state, file) {
    state.file = file;
  },
};
