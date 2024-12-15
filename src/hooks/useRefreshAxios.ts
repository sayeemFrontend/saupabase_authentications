import { useAuth } from './useAuth';
import axios, { AxiosError } from 'axios';
import axiosInstance from '../apis/axiosInstance';

export default function useRefreshAxios() {
  const { auth, setAuth }: any = useAuth();
  const { access_token = null, refresh_token = null } = auth || {};

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `bearer ${access_token}`;
      return config;
    },
    () => (err: AxiosError) => Promise.reject(err)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (err) => {
      if (err.response?.status === 403) {
        const { headers, baseURL, url, method } = err.config;
        try {
          const { data } = await axios({
            baseURL: baseURL,
            url: '/auth/v1/token?grant_type=refresh_token',
            method: 'post',
            data: { refresh_token },
            headers: {
              'Content-Type': 'application/json',
              apikey: headers['apikey'],
            },
          });
          setAuth((prev: any) => ({ ...prev, ...data }));

          //again request with updated token and return this response instead of origin response
          // don't call same instance because this will update on request with context value which yet not updated by new token

          return await axios({
            url,
            baseURL,
            method,
            headers: {
              ...headers,
              Authorization: `bearer ${data.access_token}`,
            },
          });
        } catch (refreshError) {
          return refreshError;
        }
      }

      //another error status handle here
    }
  );

  return axiosInstance;
}
