import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import Nav from "./leftnav/nav";
import Chating from "./chatlist/Chating.jsx";
import styles from "./App.module.css";
import Status from "./links/Status.jsx";
import Channel from "./links/Channel.jsx";
import Communities from "./links/Communities.jsx";
import Setting from "./links/Setting.jsx";
import Profile from "./links/Profile.jsx";
import Rightmain from "./rightside/Rightmain.jsx";
import Default from "./leftnav/Default.jsx";
import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Discription from "./rightside/rightheader/discription/Discription.jsx";
export const UserContext = createContext();
const socket = io("http://localhost:8000");
function App({ userid, setIsAuth, dp, setdp, name, isauth }) {
  const [users, setusers] = useState([]);
  const [activetab, setactivetab] = useState("");
  const [selectid, setselectid] = useState(null);
  const [searchterm, setsearchterm] = useState("");
  const [msg, setmsg] = useState([]);
  const [online, setonline] = useState(false);
  const [tick, settick] = useState(false);
  const [discription, setdiscription] = useState(false);
  const [realdata, setrealdata] = useState({});
  useEffect(() => {
    if (userid) {
      socket.emit("registration", { userid });
    }
  }, [userid]);

  useEffect(() => {
    if (!userid) return;
    const getuser = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auth/getuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userid: userid }),
        }); 
        const data = await response.json();
        if (response.ok) {
          setusers(data);
        } else {
          console.log(data, "name nahi hai");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
      }
    };
    getuser();
  }, [userid]);

  useEffect(() => {
    if (!selectid) return;
    {
      setdiscription(false);
    }
  }, [selectid]);

  const components = {
    chats: <Chating />,
    status: <Status />,
    channels: <Channel />,
    communities: <Communities />,
    setting: <Setting />,
    profile: <Profile />,
  };

  const filteredUser = users?.filter((user1) => user1._id == selectid);
  console.log("hellosedrfghjkljkcgxfzxf", filteredUser);
  return (
    <UserContext.Provider
      value={{
        users,
        setusers,
        selectid,
        setselectid,
        activetab,
        setactivetab,
        searchterm,
        setsearchterm,
        name,
        userid,
        setIsAuth,
        dp,
        setdp,
        socket,
        msg,
        setmsg,
        online,
        setonline,
        tick,
        settick,
        setdiscription,
        filteredUser,
        realdata,
        setrealdata,
      }}
    >
      <div className={styles.all}>
        <Nav />
        {components[activetab] || <Chating />}
        {discription ? (
          <Discription setdiscription={setdiscription} />
        ) : (
          <>{selectid === null && !discription ? <Default /> : <Rightmain />}</>
        )}

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
