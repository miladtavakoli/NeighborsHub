import apis from "services/apis";
import { useSnackbar } from "notistack";

const useApis = () => {
  const { enqueueSnackbar } = useSnackbar();

  return ({ api, handleSuccess, handleFailure }) =>
    api
      .then(() => {
        handleSuccess?.();
      })
      .catch((err) => {
        enqueueSnackbar.err(err);
        handleFailure?.();
      });
};

export default useApis;
