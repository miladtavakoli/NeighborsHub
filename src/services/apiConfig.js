import axios from "axios";
import { BASE_URL } from "services/constants";
import { useSnackbar } from "notistack";
const controller = new AbortController();

const apiConfig = ({ method, data = {}, url, baseURL }) =>
  axios({
    method: method.toUpperCase(),
    url,
    baseURL: baseURL ? baseURL : BASE_URL,
    signal: controller.signal,
    data,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => {
      console.log(res, "response1");
      return res;
    })
    .catch((err) => {
      throw err?.response?.data?.message;
    });

export default apiConfig;
