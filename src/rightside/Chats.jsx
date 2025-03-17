import { React, useState } from "react";
import styles from "./Chats.module.css";
import Chatclick2 from "../rightclick/Chatclick2";
import Photoshow from "../photoshow/Photoshow.jsx";

function Chats({ message, time, id, click, setclick, file ,media}) {
  const [clickd, setclickd] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setshow] = useState(false);

  function onrightclick(e) {
    e.preventDefault();

    const contentWidth = 150;
    const contentHeight = 270;

    let x = e.clientX;
    let y = e.clientY;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (x + contentWidth > viewportWidth) {
      x = viewportWidth - contentWidth - 10;
    }
    if (x < 0) x = 10;

    if (y + contentHeight > viewportHeight) {
      y = viewportHeight - contentHeight - 10;
    }
    if (y < 0) y = 10;

    setPosition({ x, y });
    setclickd(pre=>!pre);
  }

  return (
    <div
      className={styles.bddadiv}
      onClick={(e) => {
        {
          file && setshow((pre) => !pre);
        }
      }}
      onContextMenu={onrightclick}
    >
      {file ? (
              media == "video" ? (
                <video
                  className={styles.video}
                  src={`http://localhost:8000/uploads/msgdata/${file}`}
                >
                </video>
              ) : (
                <img
                  src={`http://localhost:8000/uploads/msgdata/${file}`}
                  alt="hello"
                  className={styles.file}
                />
              )
      ) : (
        <div className={styles.data}>{message}</div>
      )}
      <div className={styles.time}>{time}</div>
      {clickd && !show && (
        <Chatclick2
          className={styles.hlo}
          x={position.x}
          y={position.y}
          id={id}
          click={click}
          setclick={setclick}
          setclickd={setclickd}
        />
      )}
      {show ? <Photoshow file={file} media={media}/> : null}
    </div>
  );
}

export default Chats;
