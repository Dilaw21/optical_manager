import { request } from "./client";

export function login(usr, pwd) {
    return request("/method/login", {
        method: "POST",
        body: JSON.stringify({
            usr,
            pwd
        })
    });
}

export function logout() {
    return request("/method/logout", {
        method: "POST"
    });
}

export function getCurrentUser() {
    return request("/method/frappe.auth.get_logged_user");
}