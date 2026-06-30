import { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function refreshUser() {
        try {
            const res = await auth.getCurrentUser();

            if (res.message !== "Guest")
                setUser(res.message);
            else
                setUser(null);

        } catch {
            setUser(null);
        }

        setLoading(false);
    }

    useEffect(() => {
        refreshUser();
    }, []);

    async function signIn(email, password) {
        await auth.login(email, password);
        await refreshUser();
    }

    async function signOut() {
        await auth.logout();
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}