
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Visitors.css";

function Visitors() {
  const navigate = useNavigate();

  const [visitors, setVisitors] = useState(
    JSON.parse(localStorage.getItem("visitors")) || []
  );

  const [search, setSearch] = useState("");

  const filteredVisitors = visitors.filter((visitor) =>
    visitor.name.toLowerCase().includes(search.toLowerCase()) ||
    visitor.flatOffice.toLowerCase().includes(search.toLowerCase())
  );

  const markExit = (id) => {
    const updatedVisitors = visitors.map((visitor) =>
      visitor.id === id
        ? {
            ...visitor,
            status: "Exited",
            exitTime: new Date().toLocaleString(),
          }
        : visitor
    );

    setVisitors(updatedVisitors);
    localStorage.setItem("visitors", JSON.stringify(updatedVisitors));
  };

  return (
    <div className="visitors-page">

      <div className="visitors-header">
        <div>
          <p className="small-title">VISITOR MANAGEMENT</p>
          <h1>All Visitors</h1>
          <p>View and manage visitor records.</p>
        </div>

        <button
          className="back-button"
          onClick={() => navigate("/dashboard")}
        >
          ← Dashboard
        </button>
      </div>

      <div className="search-box">
        🔍
        <input
          type="text"
          placeholder="Search by visitor name or flat / office..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="visitors-table-container">
        <table>
          <thead>
            <tr>
              <th>Visitor Name</th>
              <th>Phone</th>
              <th>Flat / Office</th>
              <th>Purpose</th>
              <th>Entry Time</th>
              <th>Exit Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredVisitors.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-visitors">
                  No visitors found.
                </td>
              </tr>
            ) : (
              filteredVisitors.map((visitor) => (
                <tr key={visitor.id}>
                  <td>{visitor.name}</td>
                  <td>{visitor.phone}</td>
                  <td>{visitor.flatOffice}</td>
                  <td>{visitor.purpose}</td>
                  <td>{visitor.entryTime}</td>
                  <td>{visitor.exitTime || "-"}</td>

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

                  <td>
                    {visitor.status === "Inside" ? (
                      <button
                        className="exit-button"
                        onClick={() => markExit(visitor.id)}
                      >
                        Mark Exit
                      </button>
                    ) : (
                      <span className="completed">Completed</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Visitors;