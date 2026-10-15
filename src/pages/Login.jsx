import { useState } from "react";
import axios from "axios";

function Login({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);
      alert("Login successful!");

    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="form-wrapper">

      <div className="mobile-logo">
        <div className="brand-icon">✦</div>
        <span>AUTHIFY</span>
      </div>

      <div className="form-header">
        <h2>Welcome back</h2>
        <p>Enter your details to access your account.</p>
      </div>

      <form onSubmit={handleLogin}>

        <div className="input-group">
          <label>Email address</label>

          <div className="input-box">
            <span className="input-icon">✉</span>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="label-row">
            <label>Password</label>
            <a href="#forgot">Forgot password?</a>
          </div>

          <div className="input-box">
            <span className="input-icon">🔒</span>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        <div className="remember">
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
        </div>

        <button className="primary-btn" type="submit">
          Sign in
          <span>→</span>
        </button>

      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <button className="google-btn">
        <span className="google-icon">G</span>
        Continue with Google
      </button>

      <p className="switch-text">
        Don't have an account?
        <button onClick={onRegister}>Create account</button>
      </p>

    </div>
  );
}

export default Login;