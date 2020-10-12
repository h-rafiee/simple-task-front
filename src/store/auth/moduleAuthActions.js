import axios from "../../axios";

export default {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/auth/login", payload)
        .then((response) => {
          // If there's user data in response
          if (response.data.status !== 401) {
            localStorage.setItem(
              "accessToken",
              response.data.data.access_token
            );
            commit("UPDATE_USER_INFO", response.data.data.user, { root: true });
            resolve(response);
          } else {
            reject({ message: "Wrong email address or password" });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  register({ commit }, payload) {
    const { name, email, password, passwordConfirmation } = payload;

    return new Promise((resolve, reject) => {
      axios
        .post("/api/auth/register", {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        })
        .then((response) => {
          // If there's user data in response
          if (response.data.status !== 401) {
            localStorage.setItem(
              "accessToken",
              response.data.data.access_token
            );
            commit("UPDATE_USER_INFO", response.data.data.user, { root: true });
            resolve(response);
          } else {
            reject({ message: "Wrong email address or password" });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logout() {
    return new Promise((resolve, reject) => {
      axios
        .post(
          "/api/auth/logout",
          {},
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          }
        )
        .then(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("userInfo");
          resolve("logout");
        })
        .catch((err) => reject(err));
    });
  },
};
