// plugins/axios.ts
import axios from "axios";
import type { AxiosInstance } from "axios";
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const api: AxiosInstance = axios.create({
    baseURL: config.public.apiBase,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

    // Add a request interceptor
    api.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    api.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (typeof error !== undefined) {
          if (error.hasOwnProperty("response")) {
            if (error.response.status === 401 || error.response.status === 403) {
              // navigateTo("/login");
            }
          }
        }

        return Promise.reject(error);
      }
    );

  return {
    provide: {
      api,
    },
  };
});
