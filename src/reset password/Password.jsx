import { useState } from "react";
import styles from "./Password.module.css";
import { useNavigate, useParams } from "react-router-dom";
function Password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { email } = useParams();
  const token=localStorage.getItem("email");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setSuccess("Password successfully set! ");
      setError("");
      try {
        const response = await fetch(
          "http://localhost:8000/api/auth/Password",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await response.json();
        alert("Updated Password");
        navigate("/login");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("Passwords do not match ");
      setSuccess("");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h}>Set Your Password</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Set Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Verify Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
          required
        />
        <br />
        <br />
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <br />
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
