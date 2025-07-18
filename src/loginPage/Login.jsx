import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import useGlobalStore from "../store";

const Login = ({ setIsAuth ,userid}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const getuser = useGlobalStore((state) => state.getuser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.VITE_BACKEND_URL+"/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("login successful!");
        localStorage.setItem("token", data.token);
        console.log(data)
        setIsAuth(true);
        console.log(userid);
        getuser(data.userid);
        navigate("/app");
        
      } else {
        alert(data.message || "Signup failed!");
        setIsAuth(false);
        setPassword("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.h1}>Welcome to TalkBridge</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        <div className={styles.last}>
          <a className={styles.h2} href="/forgot">
            Forgot Password
          </a>
          <a className={styles.h2} href="/">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;