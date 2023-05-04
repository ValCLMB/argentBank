const baseUrl = import.meta.env.VITE_API;
const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
