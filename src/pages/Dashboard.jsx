

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
    const navigate = useNavigate();
    const [visitors, setVisitors] = useState(
     JSON.parse(localStorage.getItem("visitors")) || []
    );
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-box">VL</div>
          <div>
            <h2>VisitorLog</h2>
            <p>VISITOR MANAGEMENT SYSTEM</p>
          </div>
        </div>

        <nav>
          <button className="nav-item active">
            🏠 Dashboard
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/add-visitor")}
>
            ➕ Add Visitor
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/visitors")}
>
              👥 Visitors
        </button>
        </nav>

        <button className="logout">
          🚪 Logout
        </button>

      </aside>


      {/* Main Content */}
      <main className="main-content">

        <div className="top-bar">
          <div>
            <p className="small-title">STAFF DASHBOARD</p>
            <h1>Welcome back 👋</h1>
            <p className="subtitle">
              Here's what's happening with your visitors today.
            </p>
          </div>

          <div className="staff">
            <div className="staff-avatar">S</div>
            <span>Staff</span>
          </div>
        </div>


        {/* Statistics */}
        <div className="stats">

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div>
              <p>Total Visitors</p>
              <h2>{visitors.length}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🟢</div>
            <div>
              <p>Currently Inside</p>
              <h2>
                {visitors.filter((visitor) => visitor.status === "Inside").length}
              </h2>
  
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <div>
              <p>Exited</p>
              <h2>
                {visitors.filter((visitor) => visitor.status === "Exited").length}
              </h2>   
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div>
              <p>Today's Visitors</p>
              <h2>{visitors.length}</h2>
            </div>
          </div>

        </div>


        {/* Recent Visitors */}
        <section className="recent-section">

          <div className="section-header">
            <div>
              <h2>Recent Visitors</h2>
              <p>Latest visitor entries</p>
            </div>

            <button className="view-all">
              View all →
            </button>
          </div>


          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Visitor Name</th>
                  <th>Flat / Office</th>
                  <th>Purpose</th>
                  <th>Entry Time</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
  {visitors.length === 0 ? (
    <tr>
      <td colSpan="5" className="no-visitors">
        No visitors recorded yet.
      </td>
    </tr>
  ) : (
    visitors.map((visitor) => (
      <tr key={visitor.id}>
        <td>{visitor.name}</td>
        <td>{visitor.flatOffice}</td>
        <td>{visitor.purpose}</td>
        <td>{visitor.entryTime}</td>
        <td>
          <span
            className={
              visitor.status === "Inside"
                ? "status inside"
                : "status exited"
            }
          >
            {visitor.status}
          </span>
        </td>
      </tr>
    ))
  )}
</tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;