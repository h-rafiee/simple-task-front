export default {
  UPDATE_USER_INFO(state, payload) {
    localStorage.setItem("userInfo", JSON.stringify(payload));
  },
};
