import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {

  const isLoggedIn =
    localStorage.getItem("user") !== null;

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            isLoggedIn
              ? <Navigate to="/home" />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;