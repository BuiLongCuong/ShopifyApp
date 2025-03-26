import axios, { AxiosRequestConfig, Method } from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:8080",
    timeout: 6000,
    headers: {
        "Content-Type": "application/json"
    },
    maxContentLength: Infinity
});

axiosClient.interceptors.response.use(
  (config) => {
    return config?.data;
  },
  (error) => {
    // if needs to navigate to login page when request exception
    // history.replace('/login');
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
      // $message.error(error.message);
    } else {
      let errorMessage = error?.message?.includes('Network Error')
        ? error?.message
        : error?.response?.data?.message || 'An error occurred';
      console.log(errorMessage);
    }
    return Promise.reject(error);
  }
);

export type Response<T = any> = {
    totalCount: number;
    items: [];
};

export type MyResponse<T = any> = Promise<Response<T>>;

export const request = <T = any>(
    method: Lowercase<Method>,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): MyResponse<T> | T => {
    // const prefix = process.env.NEXT_PUBLIC_API_VERSION || '/api/v1';
  
    // url =
    //   process.env.NODE_ENV === 'development'
    //     ? process.env.NEXT_PUBLIC_BASE_API_URL + prefix + url
    //     : process.env.NEXT_PUBLIC_BASE_API_URL + prefix + url;
  
    if (method === 'post') {
      return axiosClient.post(url, data, config);
    }
    if (method === 'put') {
      return axiosClient.put(url, data, config);
    }
    if (method === 'delete') {
      return axiosClient.delete(url);
    } else {
      return axiosClient.get(url, {
        params: data,
        ...config
      });
    }
  };

export default axiosClient;