import axios from "axios";
import { useEffect } from "react";
import { APIS_BASE_URL } from "services/constants";
import { useDispatch } from "react-redux";
import { startLoading, endLoading } from "store/slices/appSlices";
import { snackActions } from "utils/SnackbarUtils";
const instance = axios.create();

const AxiosInterceptor = ({ children }) => {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const reqInterceptor = async (config) => {
      !config.withoutLoading && dispatch(startLoading());
      const extendedConfig = {
        baseURL: config.baseURL || APIS_BASE_URL,
        headers: {
          Authorization: config.token || localStorage.getItem("token"),
          "Content-Type": config.isFormData
            ? "multipart/form-data"
            : "application/json",
        },
      };
      return { ...config, ...extendedConfig };
    };

    const resSuccessInterceptor = (response) => {
      dispatch(endLoading());
      console.log(response?.data?.data, "successsss");
      return response?.data?.data;
    };

    const resErrInterceptor = (error) => {
      dispatch(endLoading());
      console.log(error, "errorrrr");
      if (error.code === "ERR_CANCELED") return;
      if (error.response?.status === 403 || error.response?.status === 400) {
        localStorage.removeItem("token");
        return Promise.reject(error);
      }
      snackActions.error(error.response.data.message);

      return Promise.reject(error);
    };

    const handleReqInterceptor =
      instance.interceptors.request.use(reqInterceptor);
    const handleResInterceptor = instance.interceptors.response.use(
      resSuccessInterceptor,
      resErrInterceptor
    );

    return () => {
      instance.interceptors.request.eject(handleReqInterceptor);
      instance.interceptors.response.eject(handleResInterceptor);
    };
  }, []);

  return children;
};

export default instance;
export { AxiosInterceptor };
