import React from "react";
import style from "../photoshow/Photoshow.module.css";
function Photoshow({ file, file2, setshow1, media }) {
  return (
    <div
      className={style.bddadiv}
      onContextMenu={(e) => {
        e.preventDefault();
        setshow1(false);
      }}
    >
      {file ? (
        media == "image" ? (
          <img
            className={style.photo}
            src={import.meta.env.VITE_BACKEND_URL+`/uploads/msgdata/${file}`}
            alt=""
          />
        ) : (
          <video
            className={style.photo}
            controls
            autoPlay
            src={import.meta.env.VITE_BACKEND_URL+`/uploads/msgdata/${file}`}
            alt=""
          />
        )
      ) : null}

      {file2 ? (
        <img
          className={style.photo}
          src={import.meta.env.VITE_BACKEND_URL+`/uploads/${file2}`}
          alt=""
        />
      ) : null}
    </div>
  );
}

export default Photoshow;
