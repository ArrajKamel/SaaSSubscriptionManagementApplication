import React from 'react';
import './RegisterPage.css';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from '../../Context/useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type RegisterFormsInputs = {
  email: string;
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const RegisterPage: React.FC = () => {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormsInputs>({ resolver: yupResolver(validation) });

  const handelRegister = (form: RegisterFormsInputs) => {
    registerUser(form.email, form.userName, form.password);
  };

  return (
    <div className="register-card">
      <h1 className="register-title">Create Your Account</h1>
      <p className="register-subtitle">Join us and start your journey!</p>
      <form onSubmit={handleSubmit(handelRegister)} className="register-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email ? (
                  <p className="text-white">{errors.email.message}</p>
                ) : (
                  ""
                )}
        </div>
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
        <button type="submit" className="register-button">Sign Up</button>
      </form>
      <p className="login-message">
        Do you have an account? <Link to={"/login"} className="login-link">Log in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
