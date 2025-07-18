import { useState } from "react";
import styles from "../reset password/Otp.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const { email } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("email");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(import.meta.VITE_BACKEND_URL+"/api/auth/Otp", {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otp,
      }),
    });
    if (response.ok) {
      const data = await response.json();

      alert("otp verified");
      navigate("/Password");
    } else {
      alert("otp wrong");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>OTP Verification</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
