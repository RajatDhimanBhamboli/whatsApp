import {React,  useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from '../signupPage/Signup';
import Login from '../loginPage/Login';
import { useNavigate } from "react-router-dom";
import App from '../App';
import style from '../authenctication/Auth.module.css'
import Checkemail from '../reset password/Checkemail';
import Otp from '../reset password/Otp';
import Password from '../reset password/Password';
function Auth() {
  const [isauth, setIsAuth] = useState(false);
  const [userid,setuserid]=useState("");
  const [name,setname]=useState("");
  const[dp,setdp]=useState("")
  
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log(token)
        setIsAuth(false);
        return;
      }
      try {
        const response = await fetch("http://localhost:8000/api/auth/check-auth", {
          method: "GET",
          headers: {
            "Authorization": token
          }
        });
        const data = await response.json();
        if (response.ok) {
          setIsAuth(true);
          console.log(data.userId,"ppppppppp")
          setuserid(data.userId);

          navigate("/App");
        } else {
          setIsAuth(false);
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsAuth(false);
      }
    };

    checkAuth();
  }, [isauth]);
  
  useEffect(()=>{
    if (!userid) return;
    const getname=async()=>{
      try {
        const response = await fetch("http://localhost:8000/api/auth/getdata", {
          
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({userid}),
        });
        const data = await response.json();
        
        if (response.ok) {
          setdp(data.dp)
           setname(data.username);
        } else {
          console.log(data,"name nahi hai");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
      }
    }
    getname();
    },[userid,dp]);
    
  return (
    <Routes>
      <Route path="/" element={<SignUp /> } />
      <Route path="/Otp" element={<Otp /> } />
      <Route path="/Password" element={<Password /> } />
      <Route path="/forgot" element={<Checkemail /> } />
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/> } />
      <Route path="/app" element={isauth ? <App  userid={userid} setIsAuth={setIsAuth} dp={dp} setdp={setdp} name={name} isauth={isauth}/> : <Login setIsAuth={setIsAuth} />} />
    </Routes>
  );
}

export default Auth;
