import React, { useState, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LOGIN_QUERY } from '../graphql/queries';
import { AuthContext } from '../context/AuthContext';
 
const Login = () => {
  const { login } = useContext(AuthContext); // Auth context to manage authentication state
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fcmToken, setFcmToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const [loginQuery, { loading }] = useLazyQuery(LOGIN_QUERY, {
    onCompleted: (data) => {
      const response = data.Gl_admin;
      if (response.__typename === 'GlAdmin') {
        login(response.jwt); // Store the JWT token
        // Redirect to a protected route or update UI accordingly
      } else if (response.__typename === 'Error') {
        setErrorMessage(response.message); // Display error message
      }
    },
    onError: (error) => {
      setErrorMessage(error.message); // Handle network or GraphQL errors
    },
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error messages
    loginQuery({
      variables: {
        email,
        password,
        fcm_token: fcmToken || null,
      },
    });
  };
 
  return (
<div>
<h2>Login</h2>
      {loading && <p>Loading...</p>}
      {errorMessage && <p style={{ color: 'red' }}>Error: {errorMessage}</p>}
<form onSubmit={handleSubmit}>
<div>
<label>Email:</label>
<input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
</div>
<div>
<label>Password:</label>
<input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
</div>
        {/* Optional FCM Token Field */}
<div>
<label>FCM Token:</label>
<input
            type="text"
            value={fcmToken}
            onChange={(e) => setFcmToken(e.target.value)}
          />
</div>
<button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
</button>
</form>
</div>
  );
};
 
export default Login;