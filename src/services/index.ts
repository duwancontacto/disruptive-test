import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface ApiProps {
  endpoint: string;
  method?: string;
  _data?: any;
  params?: any;
  urlParams?: number | string;
  baseUrlNew?: string;
}

export const Api = (props: ApiProps) => {
  const { endpoint, method, _data, params, urlParams } = {
    method: "GET",
    _data: {},
    params: {},
    urlParams: "",
    ...props,
  };

  const instance = axios.create({
    baseURL: `${baseUrl}`,
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add a request interceptor
  instance.interceptors.request.use(
    async (config) => {
      const token: string | null = await localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance.request({
    data: Object.keys(_data).length !== 0 ? _data : undefined,
    params: Object.keys(params).length !== 0 ? params : undefined,
    url: urlParams ? `${endpoint}/${urlParams}` : endpoint,
  });
};
