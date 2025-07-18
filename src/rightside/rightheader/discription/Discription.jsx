import React, { useContext } from "react";
import style from "../discription/Discription.module.css";
import { UserContext } from "../../../App";
function Discription({ setdiscription }) {
  const { name, dp, filteredUser } = useContext(UserContext);
  return (
    <div className={style.bigdiv}>
      <div className={style.header}>
        <button
          className={style.btn}
          onClick={() => {
            setdiscription(false);
          }}
        >
          ×
        </button>
        <div className={style.tittle}>Contact info</div>
      </div>
      <div className={style.main}>
        <img
          className={style.photo}
          src={import.meta.VITE_BACKEND_URL+`/uploads/${filteredUser[0]?.dp}`}
          alt=""
        />
        <div className={style.name}>{filteredUser[0]?.username}</div>
      </div>
    </div>
  );
}

export default Discription;
