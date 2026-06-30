import { useAuth } from "../context/AuthContext";

export default function Dashboard() {

    const { user, signOut } = useAuth();

    return (
        <>
            <h1>Welcome {user}</h1>

            <button onClick={signOut}>
                Logout
            </button>
        </>
    );
}
