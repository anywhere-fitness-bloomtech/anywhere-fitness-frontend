import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const { push } = useNavigate();

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  function validateForm() {
    return values.username.length > 0 && values.password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        
        values
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        push("/products");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1 className="login">Login</h1>
          <div className='form-group'>
            <label className="username">Username </label>
              <input
                type="text"
                id="user-input"
                name="username"
                value={values.username}
                onChange={onChange}
              />
              <div>
              <label className="password">Password </label>
              <input
                type="password"
                id="pass-input"
                name="password"
                value={values.password}
                onChange={onChange}
              />
              </div>
          </div>
          <div className="sub-button">
        <button disabled={!validateForm()} className='login-button'>Login</button>
        </div>
      </form>

    </div>
  );
}