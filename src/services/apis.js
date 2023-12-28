import apiConfig from "services/apiConfig";
import axios from "axios";
import { MAP_API_KEY } from "constants";
const apis = {
  auth: {
    preRegister: (data) =>
      apiConfig({ url: "/auth/pre-register", method: "post", data }),
    otpSignupChecking: (data) =>
      apiConfig({ url: "/auth/verify-pre-register", method: "post", data }),
    register: (data) =>
      apiConfig({ url: "/auth/register", method: "post", data }),
    passwordLogin: (data) =>
      apiConfig({ url: "/auth/login", method: "post", data }),
    optSending: (data) =>
      apiConfig({ url: "/auth/send-otp-login", method: "post", data }),
    optLoginChecking: (data) =>
      apiConfig({ url: "/auth/verify-otp-login", method: "post", data }),
    logout: () => apiConfig({ url: "/auth/logout", method: "get" }),
  },
  address: {
    getIpLocation: () =>
      axios.get(
        `https://api.maptiler.com/geolocation/ip.json?key=${MAP_API_KEY}`
      ),
  },
};

export default apis;
