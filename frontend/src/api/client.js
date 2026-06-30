const API = "/api";

export async function request(url, options = {}) {
    const response = await fetch(API + url, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...(options.headers || {})
        },
        ...options,
    });

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
}