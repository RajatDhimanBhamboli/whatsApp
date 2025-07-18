import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../signupPage/Signup.module.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_BACKEND_URL)
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log(response)
      const data = await response.json();

      if (response.ok) {
        alert("Signup successful! Redirecting to login page...");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupBox}>
        <h1 className={styles.h1}>Welcone to TalkBridge</h1>
        <h2 className={styles.h2}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.signupButton}>
            Sign Up
          </button>
        </form>
        <p className={styles.loginText}>
          Already have an account?{" "}
          <a className={styles.h2} href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
