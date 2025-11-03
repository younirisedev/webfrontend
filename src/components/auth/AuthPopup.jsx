import React, { useState, useEffect } from "react";
import "./AuthPopup.css";

const AuthPopup = ({ triggerPopup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 Open popup manually when trigger changes
  useEffect(() => {
    if (triggerPopup && !isLoggedIn) {
      setIsOpen(true);
    }
  }, [triggerPopup, isLoggedIn]);

  // 🔹 Auto popup every 10 seconds until user logs in
  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setInterval(() => setIsOpen(true), 10000);
      return () => clearInterval(timer);
    }
  }, [isLoggedIn]);

  // 🔹 Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("✅ Login successful!");
        setIsLoggedIn(true);
        setIsOpen(false);
      } else {
        const errorData = await response.json();
        alert(`❌ Login failed: ${errorData.detail || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("⚠️ Something went wrong. Check your backend connection.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Registration Handler
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      if (response.ok) {
        alert("🎉 Registered successfully! You can now log in.");
        setIsRegister(false);
      } else {
        const errorData = await response.json();
        alert(`⚠️ Registration failed: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("⚠️ Could not connect to backend. Make sure Django is running.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || isLoggedIn) return null;

  return (
    <div className="auth-popup-overlay">
      <div className="auth-popup">
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ✖
        </button>

        {isRegister ? (
          <form className="auth-form" onSubmit={handleRegister}>
            <h2>Register</h2>
            <input name="name" type="text" placeholder="Full Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="phone" type="text" placeholder="Phone Number" required />
            <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsRegister(false)}>Login</span>
            </p>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input name="email" type="email" placeholder="Email" required />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <p>
              Don't have an account?{" "}
              <span onClick={() => setIsRegister(true)}>Register</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPopup;
