import React, { useContext, useState } from "react";
import style from "../links/Profile.module.css";
import { UserContext } from "../App";
import Photoshow from "../photoshow/Photoshow";

function Profile() {
  const { userid, dp, setdp, name } = useContext(UserContext);
  const [about, setabout] = useState("I Am Online");
  const [show1, setshow1] = useState(false);
  function onRightClick(e) {
    e.preventDefault();
    setshow1((pre) => !pre);
  }
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profile", file);

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL+`/upload${userid}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log(" File uploaded successfully");

        const updatedData = await response.json();
        setdp(updatedData.dp);
      } else {
        console.error(" Error uploading file");
      }
    } catch (error) {
      console.error(" Fetch error:", error);
    }
  };

  function changeabout() {
    setabout(e.target.value);
  }

  return (
    <div className={style.container1}>
      <div className={style.container}>
        <div className={style.text}>
          <h1>Profile</h1>
        </div>
      </div>

      <div className={style.photo} onContextMenu={onRightClick}>
        <label htmlFor="dp">
          <img
            src={import.meta.env.VITE_BACKEND_URL+`/uploads/${dp}`}
            width="180px"
            height="180px"
            alt=""
          />
        </label>

        <input
          type="file"
          name="profile"
          id="dp"
          className={style.image}
          onChange={handleFileChange}
        />
      </div>
      <div className={style.profil}>
        <div className={style.section}>
          <div className={style.tittle}>Your name</div>
          <input
            type="text"
            className={style.editable}
            value={name.toUpperCase()}
            readOnly
          />
        </div>
        <div className={style.section}>
          <div className={style.tittle}>About</div>
          <input
            type="text"
            className={style.editable}
            value={about}
            onChange={() => {
              changeabout;
            }}
          />
        </div>
      </div>
      {show1 ? <Photoshow file2={dp} setshow1={setshow1} /> : null}
    </div>
  );
}

export default Profile;
