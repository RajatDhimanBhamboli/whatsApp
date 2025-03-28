import React from "react";
import styles from "./Image.module.css";

function Image({ image }) {
  return (
    <img
      className={styles.circle}
      src={`http://localhost:8000/uploads/${image}`}
      width="100"
    />
  );
}

export default Image;
