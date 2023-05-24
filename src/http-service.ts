const baseUrl = import.meta.env.VITE_API;

export const getToken = () => {
  const localToken = localStorage.getItem("token");
  const sessionToken = sessionStorage.getItem("token");

  if (localToken) {
    return localToken;
  }

  if (sessionToken) {
    return sessionToken;
  }
};

const headers = {
  Authorization: `Bearer ${getToken()}`,
  "Content-Type": "application/json",
};

export const getUser = (signal: AbortSignal) => {
  return fetch(baseUrl + "/user/profile", {
    method: "POST",
    headers,
    signal,
  }).then((res) => res.json());
};

export const postPut = <T>(
  endpoint: string,
  method: "POST" | "PUT",
  body: T
) => {
  return fetch(baseUrl + endpoint, {
    method,
    headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());
};
