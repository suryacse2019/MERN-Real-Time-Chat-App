import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    // TODO: Add API call for login here
    console.log('Login:', { email, password });
    navigate('/chat');
  };

  return (
    <div className="login-container" style={{maxWidth: '400px', margin: '80px auto'}}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{width: '100%', padding: '10px', marginBottom: '10px'}}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{width: '100%', padding: '10px', marginBottom: '20px'}}
        />
        <button type="submit" style={{width: '100%', padding: '10px', backgroundColor:'#44bd32', color:'white', border:'none', borderRadius:'5px'}}>Login</button>
      </form>
      <p style={{marginTop: '20px'}}>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default LoginPage;