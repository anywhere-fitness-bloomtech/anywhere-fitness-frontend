import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const initialValues = {
  username: "",
  password: "",
  role: "",
};

const initialErrors = {
  username: "",
  password: "",
  role: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username has to be at least three characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password has to be at least six characters"),
  role: yup
    .string()
    .required("Role is required!")
    
      
});

export default function Register() {
  const [user, setUser] = useState(initialValues);
  const [errors, setErrors] = useState({ initialErrors });
  const [disabled, setDisabled] = useState(false);

  const { push } = useNavigate();

  const validation = (name, value) => {
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => setErrors({ ...initialErrors, [name]: "" }))
      .catch((err) => setErrors({ ...initialErrors, [name]: err.errors[0] }));
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    validation(name, value);
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        
        user
      )
      .then((res) => {
        setUser(initialValues);
        push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    validationSchema.isValid(user).then((valid) => setDisabled(!valid));
  }, [user]);

  return (
    <div className="register-container">
      <form onSubmit={onSubmit} className="register-form">
        <div className="form-group">
          <h1 className="register">Registration</h1>

          <div className="form-group">
            <label className="username">Username </label>
            <input
              type="text"
              name="username"
              value={user.name}
              onChange={onChange}
              id='user-input'
            />
          <div>
            <label className="password">Password </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              id='pass-input'
            />
          </div>
            <br />
            <label className="role">
          <span className='input-name'>Select</span>
          <select onChange={onChange} value={initialValues.role}  name='role'>
            <option value=''>---Role---</option>
            <option value='client'>Client</option>
            <option value='instructor'>Instructor</option>
          </select>
        </label>
          </div>
        </div>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.password}</div>
        </div>
        <div className="sub-button">
        <button  disabled={disabled} className="register-button">Register</button>
        </div>
      </form>
    </div>
  );
}