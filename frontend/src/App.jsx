import React from 'react';
import { useFrappeSession } from './hooks/userFrappeSession';
import Login from './components/Login';

function App() {
  const { user, loading, login, logout } = useFrappeSession();

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>Loading session context...</div>;
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      {user ? (
        <div style={{ textAlign: 'center' }}>
          <h1>Authenticated Area</h1>
          <p>Logged in security identity: <strong>{user}</strong></p>
          <button onClick={logout} style={{ padding: '8px 16px', color: 'white', backgroundColor: '#e11d48', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Terminate Session (Logout)
          </button>
        </div>
      ) : (
        <Login onLogin={login} />
      )}
    </div>
  );
}

export default App;