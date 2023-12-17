import apiConfig from "services/apiConfig";

const apis = {
  auth: {
    preRegister: (data) =>
      apiConfig({ url: "/auth/pre-register", method: "post", data }),
    otpChecking: (data) =>
      apiConfig({ url: "/auth/verify-pre-register", method: "post", data }),
    register: (data) =>
      apiConfig({ url: "/auth/register", method: "post", data }),
  },
};

export default apis;
