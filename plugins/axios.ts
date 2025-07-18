import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const instance = axios.create({
    baseURL: config.public.apiBase,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 180000, //3 ms
  });

  // 👉 JWT decode helper
  const decodeJWT = (token: string): any => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch {
      return null;
    }
  };

  // 👉 Request Interceptor
  instance.interceptors.request.use((req) => {
    const token = localStorage.getItem("token"); // หรือจาก cookie

    if (token) {
      const payload = decodeJWT(token);

      // เช็คว่า token หมดอายุหรือยัง
      const isExpired = payload?.exp * 1000 < Date.now();

      if (!isExpired) {
        req.headers.Authorization = `Bearer ${token}`;
      } else {
        // Token หมดอายุ → ทำการลบหรือ redirect
        localStorage.removeItem("token");
        console.warn("Token expired");
        // optional: redirect
        navigateTo("/login");
      }
    }

    return req;
  });
  // 👉 Response Interceptor (optional)
  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response?.status === 401) {
        // unauthorized
        localStorage.removeItem("token");
        console.warn("Unauthorized - redirecting to login");
        // optional: redirect
        navigateTo("/login");
      }
      return Promise.reject(err);
    }
  );

  nuxtApp.provide("axios", instance);
});
