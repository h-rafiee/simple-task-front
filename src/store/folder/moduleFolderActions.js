import axios from "../../axios";

export default {
  get({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/directories", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          commit("SET_ITEMS", res.data.data);
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },

  add({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/directories", payload, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((res) => {
          commit("ADD_ITEM", payload.name);
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};
