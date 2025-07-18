import React, { useEffect } from "react";
import styles from "./Header.module.css";
import Image from "../../imagecircle/Image";
import Camera from "../../camera/Camera";
import { UserContext } from "../../App";
import { useState, useContext } from "react";

function Header({ isopen, setIsopen }) {
  const {
    users,
    selectid,
    userid,
    socket,
    online,
    setdiscription,
    filteredUser,
  } = useContext(UserContext);

  const [showCamera, setShowCamera] = useState(false);

  async function deletekardo() {
    if (!userid) return;
    try {
      const response = await fetch(import.meta.VITE_BACKEND_URL+"/api/auth/deletemsg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userid: userid, selectid: selectid }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsopen(!isopen);
      } else {
        console.log(data, "name nahi hai");
      }
    } catch (error) {
      console.error("Error checking auth:", error);
    }
  }

  return (
    <div className={styles.header}>
      <div
        className={styles.imagehai}
        onClick={() => {
          setdiscription(true);
        }}
      >
        <Image image={filteredUser[0]?.dp} />
      </div>
      <div className={styles.head}>
        <div className={styles.data}>
          <div
            className={styles.username}
            onClick={() => {
              setdiscription(true);
            }}
          >
            {filteredUser[0]?.username}
          </div>
          <div className={styles.select}>{online ? "Online" : "Offline"}</div>
        </div>
        <div className={styles.btn}>
          <div
            className={styles.video}
            onClick={() => setShowCamera(!showCamera)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#EFEFEF"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
            </svg>
          </div>
          <svg
            className={styles.search}
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#EFEFEF"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <svg
            className={styles.dots}
            onClick={() => {
              setIsopen(!isopen);
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#EFEFEF"
          >
            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
          </svg>
          {isopen && (
            <ul className={styles.popup}>
              <li className={styles.lists}>Contact info</li>
              <li className={styles.lists}>Select messages</li>
              <li className={styles.lists}>Disappering msg</li>
              <li
                className={styles.lists}
                onClick={() => {
                  deletekardo();
                }}
              >
                {" "}
                Clear chat
              </li>
            </ul>
          )}
        </div>
      </div>
      {showCamera && <Camera />}
    </div>
  );
}

export default Header;
