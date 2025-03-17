import React, { useContext } from "react";
import style from "../../rightside/rightfooter/Photodata.module.css";
import { UserContext } from "../../App";

function Photodata({ photo, file, setphoto, setclick,setphototype }) {
  const { selectid, userid,socket } = useContext(UserContext);
  async function send() {
    if (!file || !socket) return;
    setphoto(null);
    const formData1 = new FormData();
    formData1.append("filehai", file);
    try {
      const response = await fetch(
        `http://localhost:8000/dataupload/${userid}/${selectid}`,
        {
          method: "POST",
          body: formData1,
        }
      );

      if (response.ok) {
        const data=await response.json();
        console.log(data.mimetype);
        setphototype(data.mimetype);
        const messageData = {
          sender: userid,
          receiver: selectid,
          file: data.newMessage.file,
          createdAt: new Date().toISOString(),
        };
        console.log(messageData,"l");
        // socket.emit("sendMessage", messageData);
        setclick((pre) => !pre);

      } else {
        console.error(" Error uploading file");
      }
    } catch (error) {
      console.error(" Fetch error:", error);
    }
  }
  return (
    <div className={style.bddadiv}>
      {/* <img src={`http://localhost:8000/uploads/msg/${photo}`} className={style.photo} alt="" /> */}
      <img src={photo} className={style.photo} alt="" />

      <button className={style.btn} onClick={send}>
        <svg
          className={style.send}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#EFEFEF"
        >
          <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
        </svg>
      </button>
    </div>
  );
}

export default Photodata;
