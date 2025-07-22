const parseJwt = (token: string): any | null => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
};
const isTokenExpired = (exp: number): boolean => {
  const currentTime = Math.floor(Date.now() / 1000);
  return exp < currentTime;
};

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path === "/login") return;

  //   const token = localStorage.getItem("token");
  //   if (!token && to.path !== "/login") {
  //     return navigateTo("/login");
  //   }

  //   if (token && to.path !== "/login") {
  //     const payload = parseJwt(token);
  //     if (!payload || isTokenExpired(payload.exp)) {
  //       localStorage.removeItem("token");
  //       return navigateTo("/login");
  //     }
  //   }
});
