import React, { useState, useEffect } from "react";
import List from "../list/list";
import styles from "./Chatbox.module.css";
import { UserContext } from "../App";
import { useContext } from "react";

function Chatbox() {
  const { users, setusers,socket } = useContext(UserContext);
  const { searchterm } = useContext(UserContext);
  const filteredUsers = users?.filter((user2) =>
    user2.username?.toLowerCase().includes(searchterm.toLowerCase())
  );
  // useEffect(() => {
  //   socket.on("update-userlist", ({ userid, msg, time }) => {
  //     console.log(userid,msg,time,"fgrtrtgrygryg55g")
  //     setusers((prevUsers) =>
  //       prevUsers.map((user) =>
  //         user._id === userid ? { ...user, msg, time } : user
  //       )
  //     );
  //   });
  //   return () => {
  //     socket.off("update-userlist");
  //   };
  // }, [socket, users]);

  
  console.log("filterdata", filteredUsers);

  return (
    <div className={styles.chatbox}>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((list) => <List key={list._id} contactinfo={list} />)
      ) : (
        <p className={styles.noresult}>No users found</p>
      )}
    </div>
  );
}

export default Chatbox;
