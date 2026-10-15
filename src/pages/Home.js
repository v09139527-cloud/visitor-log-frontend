import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home-page">

      <nav className="navbar">

        <div className="home-logo">
          🍴 Food<span>Hub</span>
        </div>

        <button onClick={logout}>
          Logout
        </button>

      </nav>

      <div className="home-content">

        <p className="home-small">
          WELCOME TO FOOD HUB
        </p>

        <h1>
          Hello, {user?.username || "Food Lover"} 👋
        </h1>

        <p>
          Your delicious journey starts here.
        </p>

        <button className="order-button">
          Explore Restaurants
        </button>

      </div>

    </div>
  );
}

export default Home;