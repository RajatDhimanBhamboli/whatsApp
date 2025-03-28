import React, { useContext } from "react";
import style from "../rightclick/chatclcik.module.css";
import { UserContext } from "../App";

function Chatclick2({ x, y, id, click, setclick, setclickd }) {
  const { name } = useContext(UserContext);
  async function deletedata() {
    alert("Clear Chat");
    try {
      const response = await fetch("http://localhost:8000/api/auth/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setclick(!click);
        setclickd((pre) => !pre);
      } else {
        console.log(data, "name nahi hai");
      }
    } catch (error) {
      console.error("Error checking auth:", error);
    }
  }
  return (
    <div
      className={style.bddadiv}
      style={{
        position: "absolute",
        top: y,
        left: x,
      }}
    >
      <ul>
        <li>Reply</li>
        <li>Reply Message</li>
        <li>Message +{name}</li>
        <li>Copy</li>
        <li>Forward</li>
        <li>Pin</li>
        <li>Star</li>
        <li>Report</li>
        <li onClick={() => deletedata()}>Delete</li>
      </ul>
    </div>
  );
}

export default Chatclick2;
