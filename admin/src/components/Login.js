import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import bwmImage from '../assets/bwm.jpg'; // Import your BMW image here

const API_URL = process.env.REACT_APP_API_URL; // ✅ Backend URL from env

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    // Apply the background image via CSS to this container
    <div className="login-container">
      {/* The background image and blur will be handled by CSS on .login-container::before */}
      <div className="login-form-card"> {/* New div for the form to give it a distinct background */}
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
