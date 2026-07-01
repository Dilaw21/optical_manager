import { useState, useEffect } from 'react';
import frappeAPI from '../api/frappeAPI';

export function useFrappeSession() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if session cookie is valid on load
  useEffect(() => {
    frappeAPI.get('/api/method/frappe.auth.get_logged_user')
      .then((res) => {
        if (res.data.message && res.data.message !== 'Guest') {
          setUser(res.data.message); // Returns user email
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = async (usr, pwd) => {
    const response = await frappeAPI.post('/api/method/login', { usr, pwd });
    if (response.data.message === 'Logged In') {
      // Re-fetch user details to safely update state
      const userRes = await frappeAPI.get('/api/method/frappe.auth.get_logged_user');
      setUser(userRes.data.message);
      return true;
    }
    return false;
  };

  const logout = async () => {
    await frappeAPI.post('/api/method/logout');
    setUser(null);
  };

  return { user, loading, login, logout };
}