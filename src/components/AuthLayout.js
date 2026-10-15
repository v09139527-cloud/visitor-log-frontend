import React from "react";
import "./AuthLayout.css";

function AuthLayout({ children, type }) {
  return (
    <div className="auth-page">

      {/* Left Side */}
      <div className="auth-left">

        <div className="brand">
          <div className="brand-icon">🍴</div>
          <span>Food<span>Hub</span></span>
        </div>

        <div className="hero-content">
          <p className="small-heading">WELCOME TO FOOD HUB</p>

          <h1>
            One place.
            <br />
            <span>Every craving.</span>
          </h1>

          <p className="hero-text">
            Discover your favorite restaurants, order delicious food,
            and enjoy a seamless dining experience — all in one place.
          </p>

          <div className="features">
            <div>
              <span>✓</span>
              Multiple restaurants
            </div>

            <div>
              <span>✓</span>
              One simple bill
            </div>

            <div>
              <span>✓</span>
              Easy food ordering
            </div>
          </div>
        </div>

        <p className="copyright">
          © 2026 FoodHub. All rights reserved.
        </p>
      </div>

      {/* Right Side */}
      <div className="auth-right">
        <div className="auth-card">
          {children}
        </div>
      </div>

    </div>
  );
}

export default AuthLayout;