import axios from "axios";
import { BASE_URL } from "services/constants";
import { useSnackbar } from "notistack";
const controller = new AbortController();

const apiConfig = ({ method, data = {}, url }) =>
  axios({
    method: method.toUpperCase(),
    url: BASE_URL + url,
    withCredentials: false,
    signal: controller.signal,
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    data,
  })
    .then((res) => {
      console.log(res, "response1");
      return res;
    })
    .catch((err) => {
      throw err.response.data.message;
    });


export default apiConfig;
