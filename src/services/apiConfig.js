import axios from "axios";
import { BASE_URL } from "services/constants";
import { useSnackbar } from "notistack";

const apiConfig = ({ method, data, url }) =>
  axios({
    method: method.toUpperCase(),
    url: BASE_URL + url,
    withCredentials: false,
    "content-type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    ...data,
  })
    .then((res) => console.log(res, "1"))
    .catch((err) => {
      throw err.response.data.message;
    });

const useSnackActionTest = (args) => {
  const { enqueueSnackbar } = useSnackbar();
  return enqueueSnackbar;
};
export default apiConfig;
