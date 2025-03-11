import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { UserContext } from "../App";
import { useContext } from "react";
function Header() {
  const { users, userid, searchterm, setsearchterm, name, setname ,setIsAuth} =
    useContext(UserContext);

  const [isopen, setIsopen] = useState(false);
  const [isopen2, setIsopen2] = useState(false);

  function logout(){
    console.log("logout");
    localStorage.removeItem('token');
    setIsAuth(false);
    window.location.reload();
  }
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <h1>Chats</h1>
        <div className={styles.emoji}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path d="M120-160v-600q0-33 23.5-56.5T200-840h480q33 0 56.5 23.5T760-760v203q-10-2-20-2.5t-20-.5q-10 0-20 .5t-20 2.5v-203H200v400h283q-2 10-2.5 20t-.5 20q0 10 .5 20t2.5 20H240L120-160Zm160-440h320v-80H280v80Zm0 160h200v-80H280v80Zm400 280v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM200-360v-400 400Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
            onClick={() => {
              setIsopen(!isopen);
            }}
          >
            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
          </svg>
          {isopen && (
            <ul className={styles.popup}>
              <li className={styles.lists}>New group</li>
              <li className={styles.lists}>Starred messages</li>
              <li className={styles.lists}>Select chats</li>
              <li
                className={styles.lists}
                onClick={() => {
                  logout();
                }}
              >
                Log out
              </li>
              <li className={styles.lists}> Get Whatsapp for Windows</li>
            </ul>
          )}
        </div>
      </div>
      <div className={styles.inputdiv}>
        <svg
          className={styles.btn}
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#e8eaed"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <input
          type="text"
          className={styles.input}
          placeholder="Search"
          value={searchterm}
          onChange={(e) => {
            setsearchterm(e.target.value);
          }}
        />
      </div>
      <div className={styles.detail}>
        <button className={styles.btn}>All</button>
        <button className={styles.btn}>Unread</button>
        <button className={styles.btn}>Favourities</button>
        <button className={styles.btn}> Groups</button>
      </div>
      <div className={styles.archive}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          height="26px"
          viewBox="0 -960 960 960"
          width="26px"
          fill="#059f08"
        >
          <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z" />
        </svg>
        <button className={styles.archbtn}>Archived</button>
      </div>
    </div>
  );
}

export default Header;
