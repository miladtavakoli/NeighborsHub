import axios from "axios";
import { BASE_URL } from "services/constants";
import { useSnackbar } from "notistack";
const controller = new AbortController();

const apiConfig = ({ method, token, data = {}, url, baseURL }) =>
  axios({
    method: method.toUpperCase(),
    url,
    baseURL: baseURL ? baseURL : BASE_URL,
    signal: controller.signal,
    data,
    headers: {
      Authorization: token ? token : localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res.data.data, "response1");
      return res.data?.data ? res.data.data : res.data;
    })
    .catch((err) => {
      throw err?.response?.data?.message;
    });

export default apiConfig;
