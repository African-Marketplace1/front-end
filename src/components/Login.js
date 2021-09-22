import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const { push } = useHistory();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('https://africanmarketplace-1.herokuapp.com/users/login', form)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        push('https://africanmarketplace-1.herokuapp.com/categories');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome to Water My Plants!</h1>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User Name: </label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
