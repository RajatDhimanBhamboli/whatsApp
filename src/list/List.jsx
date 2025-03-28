import React, { useContext } from "react";
import styles from "./List.module.css";
import Image from "../imagecircle/Image";
import { UserContext } from "../App";

function List({ contactinfo }) {
  const { setselectid } = useContext(UserContext);

  const time = new Date(contactinfo.time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <>
      <div
        className={styles.list}
        onClick={() => {
          setselectid(contactinfo._id);
        }}
      >
        <div className={styles.image}></div>
        <Image image={contactinfo.dp} />
        <div className={styles.namedatemessage}>
          <div className={styles.namedate}>
            <div className={styles.name}>{contactinfo.username}</div>
            {/* <div className={styles.date}>{time}</div> */}
          </div>
          {/* <div className={styles.message}>{contactinfo.msg}</div> */}
        </div>
      </div>
    </>
  );
}

export default List;
