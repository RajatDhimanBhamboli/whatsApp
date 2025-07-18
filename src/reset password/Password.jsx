import { useState } from "react";
import styles from "./Password.module.css";
import { useNavigate, useParams } from "react-router-dom";

function Password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const navigate = useNavigate();
  const { email } = useParams();
  const token = localStorage.getItem("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setSuccess("Password successfully set!");
      setError("");
      try {
        const response = await fetch(
          import.meta.VITE_BACKEND_URL+"/api/auth/Password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
            body: JSON.stringify({ password: password }),
          }
        );
        const data = await response.json();
        alert("Updated Password");
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("Passwords do not match");
      setSuccess("");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h}>Set Your Password</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>
            Set Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Set Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Verify Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="Verify Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
            required
          />
          <label>
            <input
              type="checkbox"
              checked={showConfirmPassword}
              onChange={() => setShowConfirmPassword(!showConfirmPassword)}
            />
            Show Password
          </label>
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}

        <button
          type="submit"
          className={styles.button}
          disabled={!password || !confirmPassword}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Password;
