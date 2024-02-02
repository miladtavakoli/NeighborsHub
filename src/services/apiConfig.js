import axios from "axios";
import { APIS_BASE_URL } from "services/constants";
import { useSnackbar } from "notistack";

const apiConfig = ({
  method,
  token,
  data = {},
  url,
  baseURL,
  isFormData,
  params,
  signal,
}) =>
  axios({
    method: method.toUpperCase(),
    url,
    baseURL: baseURL ? baseURL : APIS_BASE_URL,
    signal,
    data,
    headers: {
      Authorization: token ? token : localStorage.getItem("token"),
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    },
    params,
  })
    .then((res) => {
      console.log(res.data.data, "response1");
      return res.data?.data ? res.data.data : res.data;
    })
    .catch((err) => {
      throw err?.response?.data?.message;
    });

export default apiConfig;
