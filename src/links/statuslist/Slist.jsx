import React from "react";
import styles from "../statuslist/Slist.module.css";
import Image from "../../imagecircle/Image";
function Slist({imagehai}) {
    console.log("rajatphoto",imagehai)
  return (
    <div className={styles.list}>
      <div className={styles.image}>
        <Image
          className={styles.photo}
          image={imagehai.src}
        />
        
      </div>
      <div className={styles.namedatemessage}>
        <div className={styles.name}>{imagehai.name}</div>
        <div className={styles.date}>{imagehai.time}</div>
      </div>
    </div>
  );
}

export default Slist;
