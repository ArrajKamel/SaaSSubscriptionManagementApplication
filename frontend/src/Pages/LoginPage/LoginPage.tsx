import React from 'react';
import './LoginPage.css';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from '../../Context/useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


type LoginFormsInputs = {
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage: React.FC = () => {

  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.userName, form.password);
  };
  return (
    <div className="login-card">
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">Log in to access your dashboard</p>
      <form onSubmit={handleSubmit(handleLogin)}className="login-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-input"
            placeholder="Enter your username"
            {...register("userName")}
          />
          {errors.userName ? (
                  <p className="text-white">{errors.userName.message}</p>
                ) : (
                  ""
                )}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password ? (
                  <p className="text-white">{errors.password.message}</p>
                ) : (
                  ""
                )}
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-message">
        Don’t have an account? <Link to={"/register"} className="signup-link">Sign up</Link>
      </p>
      <p className="login-help">Forgot your password? <a href="#">Click here</a></p>
    </div>
  );
};

export default LoginPage;
