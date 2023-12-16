import apiConfig from "services/apiConfig";

const apis = {
  register: (data) =>
    apiConfig({ url: "/auth/register", method: "post", data }),
};

export default apis;
