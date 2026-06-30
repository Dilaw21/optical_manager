import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();

    const { signIn } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    async function handleLogin(e) {

        e.preventDefault();

        try {

            await signIn(email, password);

            navigate("/");

        } catch {

            setError("Invalid credentials");
        }
    }

    return (
        <form onSubmit={handleLogin}>

            <h2>Login</h2>

            <input
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">
                Login
            </button>

            <p>{error}</p>

        </form>
    );
}