import { useEffect, useState } from 'react';
import useRefreshAxios from './useRefreshAxios';

export default function useFetch(end_point = '', config = {}) {
  const axiosInstance = useRefreshAxios();

  const [response, updateResponse] = useState({
    isError: null,
    data: {},
    isLoading: true,
  });

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance(end_point, config);
      updateResponse((prev) => ({
        ...prev,
        data: data,
      }));
    } catch (err: any) {
      updateResponse((prev) => ({ ...prev, isError: err.response }));
    } finally {
      updateResponse((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ...response };
}
