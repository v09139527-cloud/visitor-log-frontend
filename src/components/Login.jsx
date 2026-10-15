import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        data
      );

      // Store token if your backend returns one
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      localStorage.setItem("user", JSON.stringify(response.data));

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      setMessage(
        error.response?.data || "Invalid email or password"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>Food Hub</h1>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        {message && <p>{message}</p>}

        <p>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;