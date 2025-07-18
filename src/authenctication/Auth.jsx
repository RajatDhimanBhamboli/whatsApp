import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../signupPage/Signup";
import Login from "../loginPage/Login";
import { useNavigate } from "react-router-dom";
import App from "../App";
import Checkemail from "../reset password/Checkemail";
import Otp from "../reset password/Otp";
import Password from "../reset password/Password";

function Auth() {
  const [isauth, setIsAuth] = useState(false);
  const [userid, setuserid] = useState("");
  const [name, setname] = useState("");
  const [dp, setdp] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuth(false);
        return;
      }
      try {
        const response = await fetch(VITE_BACKEND_URL+"/api/auth/check-auth", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setIsAuth(true);
          setuserid(data.userId);
          navigate("/app");
        } else {
          setIsAuth(false);
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!userid) return;
    const getname = async () => {
      try {
        const response = await fetch(import.meta.VITE_BACKEND_URL+"/api/auth/getdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userid }),
        });
        const data = await response.json();
        if (response.ok) {
          setdp(data.dp);
          setname(data.username);
        } else {
          console.log(data, "name nahi hai");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
      }
    };
    getname();
  }, [userid]);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/Otp" element={<Otp />} />
      <Route path="/Password" element={<Password />} />
      <Route path="/forgot" element={<Checkemail />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth} userid={userid} />} />
      <Route
        path="/app"
        element={
          isauth ? (
            <App
              userid={userid}
              setIsAuth={setIsAuth}
              dp={dp}
              setdp={setdp}
              name={name}
              isauth={isauth}
            />
          ) : (
            <Login setIsAuth={setIsAuth} />
          )
        }
      />
    </Routes>
  );
}

export default Auth;