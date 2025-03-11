import React from "react";
import style from "../links/Status.module.css";
import Chatbox from "../chatbox/Chatbox";
import Slist from "./statuslist/Slist";
function Status() {
  const images = [
    {
        src: "https://www.bing.com/th?id=OIP.MBlOJPg-beF5E6q2yR5k9gHaLH&w=61&h=100&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2",
        name: "Rajat",
        time: "today at 09:43"
    },
    {
        src: "https://www.bing.com/th?id=OIP.MBlOJPg-beF5E6q2yR5k9gHaLH&w=61&h=100&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2",
        name: "Karan",
        time: "2025-02-18"
    }
];

  return (
    <div className={style.container1}>
      <div className={style.container}>
        <div className={style.text}>
          <h1>Status</h1>
          <div className={style.emoji}>
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
            >
              <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className={style.tittle}>RECENT</div>

      {images.map((imagehai, index) => (
        <Slist key={index} imagehai={imagehai}  />
      ))}
    </div>
  );
}

export default Status;
