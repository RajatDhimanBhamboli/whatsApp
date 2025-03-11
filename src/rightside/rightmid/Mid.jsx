// import React, { useEffect, useState, useContext } from 'react';
// import style from './Mid.module.css';
// import { UserContext } from '../../App';
// import Chats from '../Chats';
// import Chats2 from '../Chats2';

// function Mid() {
//     const { selectid, userid } = useContext(UserContext);
//     const [msg, setmsg] = useState([]);

//     useEffect(() => {
//         const getmsg = async () => {
//             if (!selectid) return;
//             const response = await fetch("http://localhost:8000/api/auth/allmsg", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "Application/json"
//                 },
//                 body: JSON.stringify({ senderId: userid, receiverId: selectid }) // ✅ Correct IDs send karo
//             });

//             const data = await response.json();
//             console.log(data);
//             setmsg(data);
//         };
//         getmsg();
//     }, [userid, selectid]);
//     return (
//         <div className={style.bddadiv}>
//             {msg?.map((item, index) => {
//                 if (item.sender === userid) {
//                     return <Chats2 key={index} className={style.chat2} message={item.text} time={item.createdAt} />;
//                 } else {
//                     return <Chats key={index} className={style.chat} message={item.text} time={item.createdAt} />;
//                 }
//             })}
//         </div>
//     );
// }

// export default Mid;

import React, { useEffect, useState, useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { io } from "socket.io-client";
import style from "./Mid.module.css";
import { UserContext } from "../../App";
import Chats from "../Chats";
import Chats2 from "../Chats2";

function Mid({ click, setclick, setonline, isopen }) {
  const { selectid, userid, socket, msg, setmsg, settick, name, setrealdata ,setusers} =
    useContext(UserContext);

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg, selectid]);

  useEffect(() => {
    socket.on("receiveMessage", (newMessage) => {
      console.log("New message received:", newMessage);
      if (newMessage.sender === selectid || newMessage.receiver === selectid) {
        console.log(newMessage);
        setmsg((prev) => [...prev, newMessage]);
        socket.emit("message-seen", { sender: selectid, receiver: userid });
        console.log(newMessage._id);
      } else {
        toast(`new message from ${name}`);
      }
    });
    return () => {
      socket.off("receiveMessage");
      socket.off("message-seen");
    };
  }, [userid, selectid, socket,setmsg]);

  useEffect(() => {
    if (selectid) {
      const unseenMessages = msg.some((m) => m.sender === selectid && !m.seen);
      if (unseenMessages) {
        console.log("Emitting message-seen for unseen messages");
        socket.emit("message-seen", { sender: selectid, receiver: userid });
      }
    }
  }, [selectid, msg]);

  useEffect(() => {
    socket.on("update-seen", ({ sender, receiver }) => {
      console.log(msg);
      setmsg((prev) =>
        prev.map((msg) =>
          msg.sender === sender && msg.receiver === receiver
            ? { ...msg, seen: true }
            : msg
        )
      );
    });
    return () => {
      socket.off("update-seen");
    };
  }, []);

  useEffect(() => {
    if (!selectid) return;
    const getmsg = async () => {
      const response = await fetch("http://localhost:8000/api/auth/allmsg", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ senderId: userid, receiverId: selectid }),
      });
      const data = await response.json();
      console.log(data[0]?.file, "lelelelelllellelelellee");
      setmsg(data);
    };
    getmsg();
  }, [selectid, click, isopen]);

  return (
    <div className={style.bddadiv}>
      {msg.map((item, index) => {
        const time = new Date(item.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return item.sender === userid ? (
          <Chats2
            key={index}
            className={style.chat2}
            message={item.text}
            time={time}
            id={item._id}
            click={click}
            setclick={setclick}
            file={item.file}
            seen={item.seen}
          />
        ) : (
          <Chats
            key={index}
            className={style.chat}
            message={item.text}
            time={time}
            id={item._id}
            click={click}
            setclick={setclick}
            file={item.file}
          />
        );
      })}
      <div ref={messagesEndRef}> {/* Last message ka reference */}</div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
export default Mid;
