import React, { useContext, useState } from "react";
import styles from "./Chats2.module.css";
import Chatclick from "../rightclick/Chatclick.jsx";
import Photoshow from "../photoshow/Photoshow.jsx";
import { UserContext } from "../App.jsx";

function Chats2({
  message,
  time,
  id,
  click,
  setclick,
  file,
  seen,
  phototype,
  media,
}) {
  const [clickd, setClickd] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setshow] = useState(false);

  function onRightClick(e) {
    e.preventDefault();
    //mere data ki height,width hai
    const contentWidth = 150;
    const contentHeight = 270;

    let x = e.clientX;
    let y = e.clientY;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (x + contentWidth > viewportWidth) {
      x = viewportWidth - contentWidth - 100;
    }
    if (x < 0) x = 10;

    if (y + contentHeight > viewportHeight) {
      y = viewportHeight - contentHeight - 10;
    }
    if (y < 0) y = 10;

    setPosition({ x, y });
    setClickd((pre) => !pre);
  }

  return (
    <div
      className={styles.bddadiv}
      onClick={(e) => {
        {
          file && setshow((pre) => !pre);
        }
      }}
      onContextMenu={onRightClick}
    >
      {file ? (
        media == "video" ? (
          <video
            className={styles.video}
            src={import.meta.env.VITE_BACKEND_URL+`/uploads/msgdata/${file}`}
          ></video>
        ) : (
          <img
            src={import.meta.env.VITE_BACKEND_URL+`/uploads/msgdata/${file}`}
            alt="hello"
            className={styles.file}
          />
        )
      ) : (
        <div className={styles.data}>{message}</div>
      )}
      <div className={styles.time}>
        {time}
        {seen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#2887ca"
          >
            <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#EFEFEF"
          >
            <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" />
          </svg>
        )}
      </div>

      {clickd && !show && (
        <Chatclick
          className={styles.hlo}
          x={position.x}
          y={position.y}
          id={id}
          click={click}
          setclick={setclick}
          setClickd={setClickd}
        />
      )}
      {show ? <Photoshow file={file} media={media} /> : null}
    </div>
  );
}

export default Chats2;
