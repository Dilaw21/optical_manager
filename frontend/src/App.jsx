import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useFrappeSession } from './hooks/userFrappeSession';
import Login from './components/Login';
import CustomerAdd from "./pages/CustomerAdd";

function App() {
  const { user, loading, login, logout } = useFrappeSession();


  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>Loading session context...</div>;
  }
  if (!user) return <Login onLogin={login} />;

    const handleLogout = async () => {
        await logout();
  
    };
    return (
      <>
                  <div style={{ padding: 10, textAlign: "right" }}>
                <button onClick={handleLogout}>Logout</button>
            </div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/customers/new" replace />} />
            <Route path="/customers/new" element={<CustomerAdd logout={logout} />} />
        </Routes>
    </BrowserRouter>
        </>
    );
}

export default App;