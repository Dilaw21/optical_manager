import { useState, useEffect, useCallback } from "react";
import frappeAPI from "../api/frappeAPI";

export function useFrappeSession() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkSession = useCallback(async () => {
        try {
            const { data } = await frappeAPI.get(
                "/api/method/frappe.auth.get_logged_user"
            );

            const loggedUser = data.message;

            if (loggedUser && loggedUser !== "Guest") {
                setUser(loggedUser);
                return loggedUser;
            }

            setUser(null);
            return null;
        } catch (err) {
            if (err.response?.status !== 403) {
                console.error("Session check failed:", err);
            }

            setUser(null);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        checkSession();
    }, [checkSession]);

    const login = useCallback(async (usr, pwd) => {
        try {
            const { data } = await frappeAPI.post(
                "/api/method/login",
                { usr, pwd }
            );

            if (data.message === "Logged In") {
                await checkSession();
                return true;
            }

            return false;
        } catch (err) {
            console.error("Login failed:", err);
            return false;
        }
    }, [checkSession]);

    const logout = useCallback(async () => {
        try {
            await frappeAPI.post("/api/method/logout");
        } catch (err) {
            console.error("Logout failed:", err);
        } finally {
            setUser(null);
        }
    }, []);

    return {
        user,
        loading,
        login,
        logout,
        checkSession,
    };
}