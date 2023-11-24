
import React, { useState } from 'react';
import Button from './Button';

const LoginForm = () => {
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  // error message
  const [errorMessage, setErrorMessage] = useState('');

  //username and password for validation
  const correctName = 'Ann';
  const correctPassword = 'password123';

  //Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === correctName && password === correctPassword) {
      setErrorMessage('');
      alert(`Welcome, ${name}!`);
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button/>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;

