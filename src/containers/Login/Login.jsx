// Login.js

import React, { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // Add your authentication logic here
    // For example, you might send a request to the server to check credentials
    // For simplicity, let's just navigate to a different page on successful login
    // Replace '/dashboard' with the actual path you want to navigate to after login
    if (username === 'demo' && password === 'password') {
      history.push('/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
