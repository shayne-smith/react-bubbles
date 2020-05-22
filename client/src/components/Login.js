import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios';

const initialCredentials = {
    username: "",
    password: ""
};

const Login = () => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const { push } = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = e => {
    setCredentials({
          ...credentials,
          [e.target.name]: e.target.value    
    });
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        push("/bubble-page");
      })
      .catch(err => {
        console.log(err);
      })

  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
            type='text'
            name='username'
            placeholder='username'
            value={credentials.username}
            onChange={handleChange}
        />
        <input
            type='password'
            name='password'
            placeholder='password'
            value={credentials.password}
            onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
