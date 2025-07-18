import React, { useContext } from "react";
import style from "../rightclick/chatclcik.module.css";
import { UserContext } from "../App";

function Chatclick({ x, y, id, click, setclick, setClickd }) {
  const { name } = useContext(UserContext);
  async function deletedata(e) {
    try {
      const response = await fetch(import.meta.VITE_BACKEND_URL+"/api/auth/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setclick((pre)=>!pre);
        setClickd((pre) => !pre);
        
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
       
        <li
          onClick={(e) => {
            deletedata(e);
          }}
        >
          Delete
        </li>
      </ul>
    </div>
  );
}

export default Chatclick;
