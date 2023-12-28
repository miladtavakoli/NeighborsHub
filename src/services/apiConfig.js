import axios from "axios";
import { BASE_URL } from "services/constants";
import { useSnackbar } from "notistack";
const controller = new AbortController();

const apiConfig = ({ method, data = {}, url }) =>
  axios({
    method: method.toUpperCase(),
    url: BASE_URL + url,
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
      throw err.response.data.message;
    });

export default apiConfig;
