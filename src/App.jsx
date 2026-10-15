import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddVisitor from "./pages/AddVisitor";
import Visitors from "./pages/Visitors";
function LoginPage() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
  e.preventDefault();
  navigate("/dashboard");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
  };

  return (
    <div className="page">

      {/* ================= LEFT SIDE ================= */}

      <section className="hero-section">

        <header className="brand">
          <div className="logo">
            VL
          </div>

          <div>
            <h2>VisitorLog</h2>
            <p>VISITOR MANAGEMENT SYSTEM</p>
          </div>
        </header>


        <div className="hero-content">

          <div className="badge">
            <span></span>
            SECURE VISITOR MANAGEMENT
          </div>

          <h1>
            Welcome to a
            <br />
            <strong>smarter way</strong>
            <br />
            to manage visitors.
          </h1>

          <p className="hero-text">
            Keep your apartment or office visitor records
            organized, secure and easy to access from one
            simple digital platform.
          </p>


          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-symbol">↳</div>

              <div>
                <h3>Easy Check-In</h3>
                <p>Record visitor entries quickly.</p>
              </div>
            </div>


            <div className="feature-card">
              <div className="feature-symbol">✓</div>

              <div>
                <h3>Entry & Exit</h3>
                <p>Track who is currently inside.</p>
              </div>
            </div>


            <div className="feature-card">
              <div className="feature-symbol">⌕</div>

              <div>
                <h3>Quick Search</h3>
                <p>Find visitor history instantly.</p>
              </div>
            </div>


            <div className="feature-card">
              <div className="feature-symbol">▣</div>

              <div>
                <h3>Digital Records</h3>
                <p>Keep records organized.</p>
              </div>
            </div>

          </div>

        </div>


        <footer className="hero-footer">
          <span>© 2026 VisitorLog</span>
          <span>Apartment • Office • Security</span>
        </footer>

      </section>


      {/* ================= RIGHT SIDE ================= */}

      <section className="login-section">

        <div className="login-container">

          {/* MOBILE BRAND */}

          <div className="mobile-brand">

            <div className="logo">
              VL
            </div>

            <div>
              <h2>VisitorLog</h2>
              <p>VISITOR MANAGEMENT</p>
            </div>

          </div>


          {!isRegister ? (

            /* ================= LOGIN ================= */

            <>

              <div className="login-header">

                <div className="login-icon">
                  🔐
                </div>

                <span className="login-label">
                  STAFF LOGIN
                </span>

                <h1>Welcome back</h1>

                <p>
                  Sign in to continue to your visitor dashboard.
                </p>

              </div>


              <form onSubmit={handleLogin}>

                {/* EMAIL */}

                <div className="form-group">

                  <label>Email address</label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      ✉
                    </span>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />

                  </div>

                </div>


                {/* PASSWORD */}

                <div className="form-group">

                  <div className="password-heading">

                    <label>Password</label>

                    <a href="#">
                      Forgot password?
                    </a>

                  </div>


                  <div className="input-wrapper">

                    <span className="input-icon">
                      🔒
                    </span>

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter your password"
                      required
                    />

                    <button
                      type="button"
                      className="show-btn"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>

                  </div>

                </div>


                {/* REMEMBER */}

                <div className="remember">

                  <label>

                    <input type="checkbox" />

                    <span>
                      Remember me
                    </span>

                  </label>

                </div>


                {/* LOGIN BUTTON */}

                <button
                  type="submit"
                  className="login-btn"
                >
                  <span>Sign in</span>
                  <span className="login-arrow">
                    →
                  </span>
                </button>

              </form>


              {/* CREATE ACCOUNT */}

              <div className="account-switch">

                <span>
                  Don't have an account?
                </span>

                <button
                  onClick={() => {
                    setIsRegister(true);
                    setShowPassword(false);
                  }}
                >
                  Create an account
                </button>

              </div>


              {/* SECURITY BOX */}

              <SecurityBox />

            </>

          ) : (

            /* ================= REGISTER ================= */

            <>

              <div className="login-header">

                <div className="login-icon">
                  👤
                </div>

                <span className="login-label">
                  STAFF REGISTRATION
                </span>

                <h1>Create an account</h1>

                <p>
                  Register to access the VisitorLog management system.
                </p>

              </div>


              <form onSubmit={handleRegister}>

                {/* FULL NAME */}

                <div className="form-group">

                  <label>Full name</label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      👤
                    </span>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />

                  </div>

                </div>


                {/* EMAIL */}

                <div className="form-group">

                  <label>Email address</label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      ✉
                    </span>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />

                  </div>

                </div>


                {/* PHONE */}

                <div className="form-group">

                  <label>Phone number</label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      ☎
                    </span>

                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />

                  </div>

                </div>


                {/* PASSWORD */}

                <div className="form-group">

                  <label>Password</label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      🔒
                    </span>

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Create a password"
                      required
                    />

                    <button
                      type="button"
                      className="show-btn"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>

                  </div>

                </div>


                {/* CONFIRM PASSWORD */}

                <div className="form-group">

                  <label>Confirm password</label>

                  <div className="input-wrapper">

                    <span className="input-icon">
                      🔒
                    </span>

                    <input
                      type="password"
                      placeholder="Confirm your password"
                      required
                    />

                  </div>

                </div>


                {/* TERMS */}

                <div className="terms">

                  <input
                    type="checkbox"
                    required
                  />

                  <span>
                    I agree to the VisitorLog
                    terms and privacy policy.
                  </span>

                </div>


                {/* REGISTER */}

                <button
                  type="submit"
                  className="login-btn"
                >
                  <span>Create account</span>
                  <span className="login-arrow">
                    →
                  </span>
                </button>

              </form>


              {/* BACK TO LOGIN */}

              <div className="account-switch">

                <span>
                  Already have an account?
                </span>

                <button
                  onClick={() => {
                    setIsRegister(false);
                    setShowPassword(false);
                  }}
                >
                  Sign in
                </button>

              </div>


              <SecurityBox />

            </>

          )}

        </div>

      </section>

    </div>
  );
}


/* SECURITY COMPONENT */

function SecurityBox() {
  return (
    <div className="security-box">

      <div className="security-icon">
        ✓
      </div>

      <div>
        <h4>Secure access</h4>

        <p>
          This system is restricted to authorized staff.
        </p>
      </div>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-visitor" element={<AddVisitor />} />
        <Route path="/visitors" element={<Visitors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;