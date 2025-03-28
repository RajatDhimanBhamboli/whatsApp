import { useState } from "react";
import styles from "../reset password/Checkemail.module.css";
import { useNavigate } from "react-router-dom";

const Checkemail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/auth/checkemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("otp hai", data.otp);
      alert(data.otp);
      localStorage.setItem("email", data.token);
      navigate("/Otp");
    } else {
      alert("Error sending email");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkemail;
