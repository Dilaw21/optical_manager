import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const success = await onLogin(username, password);
      if (!success) {
        setError('Invalid login credentials.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Connection to server failed.');
    }
  };

  return (
    <div style={{ maxWidth: '320px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Frappe Session Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block' }}>Email / Username</label>
          <input 
            type="text" 
            style={{ width: '100%', padding: '6px' }} 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block' }}>Password</label>
          <input 
            type="password" 
            style={{ width: '100%', padding: '6px' }} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '8px', cursor: 'pointer' }}>Sign In</button>
      </form>
    </div>
  );
}