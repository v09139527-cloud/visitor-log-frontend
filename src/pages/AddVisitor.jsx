
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddVisitor.css";

function AddVisitor() {
  const navigate = useNavigate();

  const [visitor, setVisitor] = useState({
    name: "",
    phone: "",
    flatOffice: "",
    purpose: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setVisitor({
      ...visitor,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/visitors",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(visitor)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save visitor");
      }

      const savedVisitor = await response.json();

      alert("Visitor added successfully! ID: " + savedVisitor.id);

      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding visitor:", error);

      alert(
        "Could not save visitor to the database. " +
        "Please check whether the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-visitor-page">
      <div className="add-visitor-header">
        <button
          className="back-button"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>

        <div>
          <p className="page-label">VISITOR MANAGEMENT</p>
          <h1>Add New Visitor</h1>
          <p>Enter the visitor details below.</p>
        </div>
      </div>

      <div className="visitor-form-card">
        <h2>Visitor Information</h2>

        <p className="form-description">
          Please enter the visitor's details to record their entry.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Visitor Name *</label>

              <input
                type="text"
                name="name"
                placeholder="Enter visitor name"
                value={visitor.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={visitor.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Flat / Office Number *</label>

              <input
                type="text"
                name="flatOffice"
                placeholder="Example: A-102"
                value={visitor.flatOffice}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Purpose of Visit *</label>

              <select
                name="purpose"
                value={visitor.purpose}
                onChange={handleChange}
                required
              >
                <option value="">Select purpose</option>
                <option value="Meeting">Meeting</option>
                <option value="Delivery">Delivery</option>
                <option value="Personal">Personal</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="entry-time-box">
            <span>🕐</span>

            <div>
              <strong>Entry Time</strong>
              <p>
                Entry time will be recorded automatically when
                the visitor is added.
              </p>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-button"
              disabled={loading}
            >
              {loading ? "Saving..." : "Add Visitor →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddVisitor;
