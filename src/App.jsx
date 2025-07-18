import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Nav from "./leftnav/nav.jsx";
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
import useGlobalStore from "./store.js";

export const UserContext = createContext();
const socket = io(import.meta.VITE_BACKEND_URL);

function App({ userid, setIsAuth, dp, setdp, name, isauth }) {
  const users = useGlobalStore((state) => state.users);
  const setusers = useGlobalStore((state) => state.setusers);
  const getuser = useGlobalStore((state) => state.getuser);
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
      getuser(userid);
    }
    return () => {
      socket.disconnect();
    };
  }, [userid,getuser]);

  useEffect(() => {
    if (!userid) return;
    getuser(userid);
  }, [userid, getuser]);

  useEffect(() => {
    if (!selectid) return;
    setdiscription(false);
  }, [selectid]);

  useEffect(() => {
    socket.on('refreshUsers', (data) => {
      console.log("condition check krni hai");
      if (data.excludeUserId !== userid) {
        console.log("refresh krlo");
        toast.info(
          <div>
            {data.message}
            <button
              onClick={() => getuser(userid)}
              style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
            >
              Refresh Now
            </button>
          </div>,
          {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: false,
          }
        );
      }
    });
   socket.on('updateProfile', (data) => {
      if (data.excludeUserId !== userid) {
        if (!Array.isArray(users)) {
          getuser(userid);
          return;
        }
        setusers(
          users.map((user) =>
            user._id === data.userId ? { ...user, dp: data.dp } : user
          )
        );
      }
    });
    return () => {
      socket.off('refreshUsers');
      socket.off('updateProfile');
    };
  }, [getuser, userid,setusers,users]);

  const components = {
    chats: <Chating />,
    status: <Status />,
    channels: <Channel />,
    communities: <Communities />,
    setting: <Setting />,
    profile: <Profile />,
  };

  const filteredUser = users?.filter((user1) => user1._id === selectid);

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