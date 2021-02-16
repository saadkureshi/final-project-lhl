import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./Navbar.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {

  const [loginFormInput, setLoginFormInput] = useState({
    username: "",
    password: ""
  })

  const [loginStatus, setLoginStatus] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    axios.post('/login', {
      username: loginFormInput.username,
      password: loginFormInput.password
    })
      .then(res => {
        // console.log("YOOOOO")
        console.log(res);
        // setLoginStatus(res)
        if (Array.isArray(res.data)) {
          setLoginStatus("Login successful");
        } else {
          setLoginStatus("Login failed");
        }
      })
  }

  return (
    <div className="login">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="username" placeholder="Enter username"
            value={loginFormInput.username}
            onChange={e => {
              setLoginFormInput({
                ...loginFormInput,
                username: e.target.value
              })
            }}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" placeholder="Password" 
            value={loginFormInput.password}
            onChange={e => {
              setLoginFormInput({
                ...loginFormInput,
                password: e.target.value
              })
            }}
            />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit"
        onClick={e => loginUser(e)}
        >
          Submit
        </Button>
      </Form>
      <h1>{loginStatus}</h1>
    </div>
  )
}

export default Login
