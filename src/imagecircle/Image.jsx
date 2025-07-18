import React from "react";
import styles from "./Image.module.css";

function Image({ image }) {
  return (
    <img
      className={styles.circle}
      src={import.meta.VITE_BACKEND_URL+`/uploads/${image}`}
      width="100"
    />
  );
}

export default Image;
