function checkAuth() {
  let token = localStorage.getItem("accessToken");
  if (!token) {
    return false;
  }
  var base64Payload = token.split(".")[1];
  var payload = Buffer.from(base64Payload, "base64");
  token = JSON.parse(payload.toString());
  const date = new Date(Date.now());
  const expireDate = new Date(token.exp * 1000);
  return date < expireDate;
}

export default {
  isUserLoggedIn: () => {
    let isAuthenticated = false;
    if (checkAuth()) isAuthenticated = true;
    else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
      document.cookie =
        "_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      isAuthenticated = false;
    }
    return localStorage.getItem("userInfo") && isAuthenticated;
  },
};
