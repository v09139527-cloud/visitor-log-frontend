import { useState } from "react";
import axios from "axios";

function Register({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      console.log(response.data);

      alert("Account created successfully!");

      onLogin();

    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="form-wrapper">

      <div className="mobile-logo">
        <div className="brand-icon">✦</div>
        <span>AUTHIFY</span>
      </div>

      <div className="form-header">
        <h2>Create your account</h2>
        <p>Join us and get started in just a few seconds.</p>
      </div>

      <form onSubmit={handleRegister}>

        <div className="input-group">
          <label>Username</label>

          <div className="input-box">
            <span className="input-icon">👤</span>

            <input
              type="text"
              name="username"
              placeholder="Your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Email address</label>

          <div className="input-box">
            <span className="input-icon">✉</span>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="input-box">
            <span className="input-icon">🔒</span>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="input-group">
          <label>Confirm password</label>

          <div className="input-box">
            <span className="input-icon">🔒</span>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="terms">
          <input type="checkbox" required />

          <span>
            I agree to the <a href="#terms">Terms of Service</a>
            {" "}and{" "}
            <a href="#privacy">Privacy Policy</a>
          </span>
        </div>

        <button className="primary-btn" type="submit">
          Create account
          <span>→</span>
        </button>

      </form>

      <p className="switch-text">
        Already have an account?
        <button onClick={onLogin}>Sign in</button>
      </p>

    </div>
  );
}

export default Register;