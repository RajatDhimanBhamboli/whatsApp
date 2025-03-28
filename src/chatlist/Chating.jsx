import React from "react";
import styles from "./Chating.module.css";
import Header from "./Header";
import Chatbox from "../chatbox/Chatbox";

function Chating() {
  return (
    <div className={styles.container}>
      <Header />
      <Chatbox />
    </div>
  );
}

export default Chating;
