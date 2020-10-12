import axios from "../../axios";

export default {
  get({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/process", {
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
};
