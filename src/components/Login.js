import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const history = useNavigate();

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/login', formData);
      localStorage.setItem('token', res.data.token);
      history.push('/policies');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input type='email' name='email' value={email} onChange={onChange} placeholder='Email' required />
        <input type='password' name='password' value={password} onChange={onChange} placeholder='Password' required />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
