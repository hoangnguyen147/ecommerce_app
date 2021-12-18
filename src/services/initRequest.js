import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/actions/general';
import authService from './authService';



const requestConfig = {
  baseURL: "http://api.doanky5.huyhoangdev.engineer/api",
  showSpinner: false,
};

export const axiosInstance = axios.create(requestConfig);

export default function initRequest(store) {
  let requestCount = 0;

  function decreaseRequestCount() {
    requestCount -= 1;
    if (requestCount === 0) {
      // store.dispatch(setLoading(false));
    }
  }

  axiosInstance.interceptors.request.use(
    (config) => {
      if (config.showSpinner) {
        requestCount += 1;
        // store.dispatch(setLoading(true));
      }

      const accessToken = store.getState().user.token;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => {
      if (error.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      if (res.config?.showSpinner) {
        decreaseRequestCount();
      }
      return res.data;
    },
    (error) => {
      if ((error && error.config?.showSpinner) || error.code === 'ECONNABORTED') {
        decreaseRequestCount();
      }

      // handle request timeout
      if (error.code === 'ECONNABORTED') {
        // store.dispatch(setLoading(false));
      }

      switch (error.response?.status) {
        case 400: {
          break;
        }
        case 500: {
          break;
        }
        default:
          break;
      }
      return Promise.reject(error);
    },
  );
}
