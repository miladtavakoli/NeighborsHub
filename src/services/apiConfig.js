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

    const resInterceptor = (response) => {
      dispatch(endLoading());
      return response?.data?.data;
    };

    const errInterceptor = (error) => {
      dispatch(endLoading());
      snackActions.error(error.response.data.message);
      console.log(error.response);
      // if (error.response.status === 401) {
      //   alert(401);
      // }

      return Promise.reject(error);
    };

    const handleReqInterceptor =
      instance.interceptors.request.use(reqInterceptor);
    const handleResInterceptor = instance.interceptors.response.use(
      resInterceptor,
      errInterceptor
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
