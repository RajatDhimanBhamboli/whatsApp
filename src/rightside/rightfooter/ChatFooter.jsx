// import React from 'react'
// import styles from "./ChatFooter.module.css";
// import  { useContext ,useState} from 'react'
// import { UserContext } from '../../App'

// function ChatFooter() {
//         const {selectid,userid} = useContext(UserContext);
//         const [value,setvalue]=useState("");
//         const [sticker,setsticker]=useState(false);
//         const stickers = [
//             "😊", "😂", "😎", "🥳", "🔥", "🤯", "💀", "❤️", "😍", "😜", "🥺", "🤩", "💖", "😘", "😋", "🤗",
//             "😅", "😆", "🤤", "😇", "😬", "🫣", "🤭", "😶‍🌫️", "🥰", "😏", "🫶", "🙌", "👏", "🙏", "💪",
//             "🤚", "👋", "👻", "💩", "🍀", "🌈", "🌹", "🌻", "🌟", "✨", "💫", "🎉", "🎈", "🏆", "🎶", "🎵",
//             "🎧", "🥁", "🎤", "🎷", "🎸", "🎺", "🎻", "🎮", "🕹️", "📱", "💻", "🖥️", "🖨️", "🖱️", "💾",
//             "📷", "📸", "📼", "📹", "🎬", "📺", "📻", "📚", "📖", "📝", "✏️", "🖊️", "🖋️", "🖌️", "💼",
//             "📁", "📂", "🗂️", "📊", "📈", "📅", "📆", "🗓️", "📝", "📜", "💌", "📧", "💌", "🏠", "🏡",
//             "🚗", "🚙", "🚌", "🚎", "🚓", "🚑", "🚒", "🚐", "🚛", "🚜", "🛵", "🏍️", "🚲", "🛴", "🦽", "🚶‍♀️",
//             "🚶‍♂️", "🏃‍♀️", "🏃‍♂️", "🏅", "🥇", "🥈", "🥉", "🎯", "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉",
//             "🎱", "🥅", "🥋", "🥊", "🥎", "⛸️", "🎿", "🥌", "🎯", "🏸", "🛶", "🚣‍♀️", "🚣‍♂️"
//           ];
//         const  sendmessage =async()=>{

//             try{
//                 const response = await fetch("http://localhost:8000/api/auth/send",{
//                     method:"POST",
//                     headers:{
//                         "Content-Type":"Application/json"
//                     },
//                     body:JSON.stringify({
//                         sender:userid,
//                         receiver:selectid,
//                         text:value,
//                     })
//                 });
//                 const data = await response.json();
//                 if(response.ok){
//                 console.log(data);
//                 setvalue("");
//                 setsticker((pre)=>{false})
//                 }
//             }
//             catch(error){
//                 console.log(error);
//                 }

//         }

//         function changedata(e){
//             setvalue(e.target.value);
//         }
//     return(
//     <div className={styles.bddadiv}>
//         <div className={styles.plus}>
//         <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#EFEFEF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
//         </div>
//         <div className={styles.input}>
//             <div className={styles.sticker} onClick={()=>{
//                 console.log("sticker")
//                 setsticker(!sticker);
//             }}>
//             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M620-40q-104 0-183.5-62T331-260q45 2 89-9t84-31h164q1-11 1.5-21.5t.5-21.5q0-9-.5-18.5T668-380h-59q16-18 29.5-38t24.5-42h141q-20-30-48-52.5T693-547q5-20 6.5-41t.5-41q96 26 158 105.5T920-340q0 125-87.5 212.5T620-40Zm-95-102q-7-20-12.5-39t-9.5-39h-67q17 25 39.5 45t49.5 33Zm95 14q12-22 20.5-45t14.5-47h-70q6 24 15 47t20 45Zm95-14q27-13 49.5-33t39.5-45h-67q-5 20-10 39t-12 39Zm33-158h88q2-10 3-19.5t1-20.5q0-11-1-20.5t-3-19.5h-88q1 9 1.5 18.5t.5 18.5q0 11-.5 21.5T748-300Zm-408-20q-125 0-212.5-87.5T40-620q0-125 87.5-212.5T340-920q125 0 212.5 87.5T640-620q0 125-87.5 212.5T340-320Zm0-80q91 0 155.5-64.5T560-620q0-91-64.5-155.5T340-840q-91 0-155.5 64.5T120-620q0 91 64.5 155.5T340-400ZM240-640q17 0 28.5-11.5T280-680q0-17-11.5-28.5T240-720q-17 0-28.5 11.5T200-680q0 17 11.5 28.5T240-640Zm100 176q48 0 85.5-27t54.5-69H200q17 42 54.5 69t85.5 27Zm100-176q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680q0 17 11.5 28.5T440-640Zm-100 20Z"/></svg>
//             </div>
//             <input type="text" placeholder='Type a message' value={value} onChange={(e)=>{changedata(e)}  }  onFocus={()=>{setsticker((pre)=>{false})}} />
//         </div>
//         {sticker&&<ul className={styles.stickerdata}>
//             {
//             stickers.map((emoji,index)=>(
//                 <li key={index}  className={styles.lists} onClick={()=>{
//                     setvalue(value+emoji);
//                     }}>
//                         {emoji}
//                     </li>
//             ))
//             }
//         </ul>
//         }
//         <button className={styles.mic} onClick={()=>{ sendmessage()}}>

//              {/* if(value.trim()==="")
//                  return;
//              const newMessage = { */}
//         {/* //         sender: "me",
//         //         message: value,
//         //         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         //     };

//         //     setmessages(prevMessages => ({ */}
//         {/* //         ...prevMessages,
//         //         [selectid]: [...(prevMessages[selectid] || []), newMessage]
//         //     }));

//         //     setvalue("");
//         //     setsticker((pre)=>{false});  */}

//       <svg className={styles.send} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z"/></svg>
//            </button>
//     </div>

//   )
// }
// export default ChatFooter

// const file= e.target.files[0];
//     if(!file) return;
//     const formData1=new FormData();
//     formData1.append("filehai",file);
//     try {
//       const response = await fetch(`http://localhost:8000/dataupload/${userid}/${selectid}`, {
//         method: "POST",
//         body: formData1,
//       });

//       if (response.ok) {

//         console.log(" File uploaded successfully");
//         const updatedData = await response.json();
//         setphoto(updatedData.newMessage.file);

//         // setdp(updatedData.dp);
//       } else {
//         console.error(" Error uploading file");
//       }
//     } catch (error) {
//       console.error(" Fetch error:", error);
//     }

import React, { useState, useContext } from "react";
import styles from "./ChatFooter.module.css";
import { UserContext } from "../../App";
import Photodata from "./Photodata";

function ChatFooter({ click, setclick }) {
  const { selectid, userid, socket, setmsg } = useContext(UserContext);
  const [value, setvalue] = useState("");
  const [sticker, setsticker] = useState(false);
  const [photo, setphoto] = useState(null);
  const [selectfile, setselectfile] = useState(null);
  const stickers = [
    "😊",
    "😂",
    "😎",
    "🥳",
    "🔥",
    "🤯",
    "💀",
    "❤️",
    "😍",
    "😜",
    "🥺",
    "🤩",
    "💖",
    "😘",
    "😋",
    "🤗",
    "😅",
    "😆",
    "🤤",
    "😇",
    "😬",
    "🫣",
    "🤭",
    "😶‍🌫️",
    "🥰",
    "😏",
    "🫶",
    "🙌",
    "👏",
    "🙏",
    "💪",
    "🤚",
    "👋",
    "👻",
    "💩",
    "🍀",
    "🌈",
    "🌹",
    "🌻",
    "🌟",
    "✨",
    "💫",
    "🎉",
    "🎈",
    "🏆",
    "🎶",
    "🎵",
    "🎧",
    "🥁",
    "🎤",
    "🎷",
    "🎸",
    "🎺",
    "🎻",
    "🎮",
    "🕹️",
    "📱",
    "💻",
    "🖥️",
    "🖨️",
    "🖱️",
    "💾",
    "📷",
    "📸",
    "📼",
    "📹",
    "🎬",
    "📺",
    "📻",
    "📚",
    "📖",
    "📝",
    "✏️",
    "🖊️",
    "🖋️",
    "🖌️",
    "💼",
    "📁",
    "📂",
    "🗂️",
    "📊",
    "📈",
    "📅",
    "📆",
    "🗓️",
    "📝",
    "📜",
    "💌",
    "📧",
    "💌",
    "🏠",
    "🏡",
    "🚗",
    "🚙",
    "🚌",
    "🚎",
    "🚓",
    "🚑",
    "🚒",
    "🚐",
    "🚛",
    "🚜",
    "🛵",
    "🏍️",
    "🚲",
    "🛴",
    "🦽",
    "🚶‍♀️",
    "🚶‍♂️",
    "🏃‍♀️",
    "🏃‍♂️",
    "🏅",
    "🥇",
    "🥈",
    "🥉",
    "🎯",
    "⚽",
    "🏀",
    "🏈",
    "⚾",
    "🎾",
    "🏐",
    "🏉",
    "🎱",
    "🥅",
    "🥋",
    "🥊",
    "🥎",
    "⛸️",
    "🎿",
    "🥌",
    "🎯",
    "🏸",
    "🛶",
    "🚣‍♀️",
    "🚣‍♂️",
  ];

  const sendmessage = async () => {
    if (!value.trim()) return;
    const messageData = {
      sender: userid,
      receiver: selectid,
      text: value,
      file: null,
      createdAt: new Date().toISOString(),
    };
    socket.emit("sendMessage", messageData);
    setclick(!click);

    setvalue("");
    setsticker(false);
    setphoto(null);
  };

  function changedata(e) {
    setvalue(e.target.value);
  }

  async function addphoto(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    console.log("File selected:", file.name);
    setselectfile(file);
    const reader = new FileReader();
    reader.onload = function (e) {
      setphoto(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={styles.bddadiv}>
      <div className={styles.plus}>
        <label htmlFor="data">
          <svg
            onClick={() => {
              setphoto(null);
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#EFEFEF"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </label>
        <input
          type="file"
          id="data"
          name="filehai"
          onChange={addphoto}
          style={{ display: "none" }}
        />
      </div>
      {photo != null ? (
        <Photodata
          photo={photo}
          file={selectfile}
          setphoto={setphoto}
          setclick={setclick}

        />
      ) : (
        <></>
      )}
      <div className={styles.input}>
        <div
          className={styles.sticker}
          onClick={() => {
            setsticker(!sticker);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#EFEFEF"
          >
            <path d="M620-40q-104 0-183.5-62T331-260q45 2 89-9t84-31h164q1-11 1.5-21.5t.5-21.5q0-9-.5-18.5T668-380h-59q16-18 29.5-38t24.5-42h141q-20-30-48-52.5T693-547q5-20 6.5-41t.5-41q96 26 158 105.5T920-340q0 125-87.5 212.5T620-40Zm-95-102q-7-20-12.5-39t-9.5-39h-67q17 25 39.5 45t49.5 33Zm95 14q12-22 20.5-45t14.5-47h-70q6 24 15 47t20 45Zm95-14q27-13 49.5-33t39.5-45h-67q-5 20-10 39t-12 39Zm33-158h88q2-10 3-19.5t1-20.5q0-11-1-20.5t-3-19.5h-88q1 9 1.5 18.5t.5 18.5q0 11-.5 21.5T748-300Zm-408-20q-125 0-212.5-87.5T40-620q0-125 87.5-212.5T340-920q125 0 212.5 87.5T640-620q0 125-87.5 212.5T340-320Zm0-80q91 0 155.5-64.5T560-620q0-91-64.5-155.5T340-840q-91 0-155.5 64.5T120-620q0 91 64.5 155.5T340-400ZM240-640q17 0 28.5-11.5T280-680q0-17-11.5-28.5T240-720q-17 0-28.5 11.5T200-680q0 17 11.5 28.5T240-640Zm100 176q48 0 85.5-27t54.5-69H200q17 42 54.5 69t85.5 27Zm100-176q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680q0 17 11.5 28.5T440-640Zm-100 20Z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Type a message"
          value={value}
          onChange={(e) => {
            changedata(e);
          }}
          onFocus={() => {
            setsticker((pre) => {
              false;
            });
          }}
        />
      </div>
      {sticker && (
        <ul className={styles.stickerdata}>
          {stickers.map((emoji, index) => (
            <li
              key={index}
              className={styles.lists}
              onClick={() => {
                setvalue(value + emoji);
              }}
            >
              {emoji}
            </li>
          ))}
        </ul>
      )}
      <button
        className={styles.mic}
        onClick={() => {
          sendmessage();
        }}
      >
        {/* if(value.trim()==="")
                 return;
             const newMessage = { */}
        {/* //         sender: "me",
        //         message: value,
        //         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        //     };
        
        //     setmessages(prevMessages => ({ */}
        {/* //         ...prevMessages,
        //         [selectid]: [...(prevMessages[selectid] || []), newMessage] 
        //     }));
        
        //     setvalue("");
        //     setsticker((pre)=>{false});  */}

        <svg
          className={styles.send}
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
export default ChatFooter;

// import React, { useState, useContext } from "react";
// import styles from "./ChatFooter.module.css";
// import { UserContext } from "../../App";
// import Photodata from "./Photodata";

// function ChatFooter({ click, setclick }) {
//   const { selectid, userid, socket, setmsg } = useContext(UserContext);
//   const [value, setvalue] = useState("");
//   const [sticker, setsticker] = useState(false);
//   const[photo,setphoto]=useState(null)
//   console.log("lolo12345     ", userid);
//   const stickers = [
//     "😊",
//     "😂",
//     "😎",
//     "🥳",
//     "🔥",
//     "🤯",
//     "💀",
//     "❤️",
//     "😍",
//     "😜",
//     "🥺",
//     "🤩",
//     "💖",
//     "😘",
//     "😋",
//     "🤗",
//     "😅",
//     "😆",
//     "🤤",
//     "😇",
//     "😬",
//     "🫣",
//     "🤭",
//     "😶‍🌫️",
//     "🥰",
//     "😏",
//     "🫶",
//     "🙌",
//     "👏",
//     "🙏",
//     "💪",
//     "🤚",
//     "👋",
//     "👻",
//     "💩",
//     "🍀",
//     "🌈",
//     "🌹",
//     "🌻",
//     "🌟",
//     "✨",
//     "💫",
//     "🎉",
//     "🎈",
//     "🏆",
//     "🎶",
//     "🎵",
//     "🎧",
//     "🥁",
//     "🎤",
//     "🎷",
//     "🎸",
//     "🎺",
//     "🎻",
//     "🎮",
//     "🕹️",
//     "📱",
//     "💻",
//     "🖥️",
//     "🖨️",
//     "🖱️",
//     "💾",
//     "📷",
//     "📸",
//     "📼",
//     "📹",
//     "🎬",
//     "📺",
//     "📻",
//     "📚",
//     "📖",
//     "📝",
//     "✏️",
//     "🖊️",
//     "🖋️",
//     "🖌️",
//     "💼",
//     "📁",
//     "📂",
//     "🗂️",
//     "📊",
//     "📈",
//     "📅",
//     "📆",
//     "🗓️",
//     "📝",
//     "📜",
//     "💌",
//     "📧",
//     "💌",
//     "🏠",
//     "🏡",
//     "🚗",
//     "🚙",
//     "🚌",
//     "🚎",
//     "🚓",
//     "🚑",
//     "🚒",
//     "🚐",
//     "🚛",
//     "🚜",
//     "🛵",
//     "🏍️",
//     "🚲",
//     "🛴",
//     "🦽",
//     "🚶‍♀️",
//     "🚶‍♂️",
//     "🏃‍♀️",
//     "🏃‍♂️",
//     "🏅",
//     "🥇",
//     "🥈",
//     "🥉",
//     "🎯",
//     "⚽",
//     "🏀",
//     "🏈",
//     "⚾",
//     "🎾",
//     "🏐",
//     "🏉",
//     "🎱",
//     "🥅",
//     "🥋",
//     "🥊",
//     "🥎",
//     "⛸️",
//     "🎿",
//     "🥌",
//     "🎯",
//     "🏸",
//     "🛶",
//     "🚣‍♀️",
//     "🚣‍♂️",
//   ];

//   const sendmessage = async () => {
//     if (!value.trim()) return;
//     const messageData = {
//       sender: userid,
//       receiver: selectid,
//       text: value,
//       createdAt: new Date().toISOString(),
//     };
//     socket.emit("sendMessage", messageData);
//     console.log(messageData);
//     setclick(!click);
//     // setmsg(prev => [...prev, messageData]);

//     setvalue("");
//     setsticker(false);
//   };

//   function changedata(e) {
//     setvalue(e.target.value);
//   }

//   async function addphoto(e){
//     alert("hello bahi")
//     const file= e.target.files[0];
//     if(!file) return;
//     const formData1=new FormData();
//     formData1.append("filehai",file);
//     try {
//       const response = await fetch(`http://localhost:8000/dataupload/${userid}/${selectid}`, {
//         method: "POST",
//         body: formData1,
//       });

//       if (response.ok) {

//         console.log(" File uploaded successfully");
//         const updatedData = await response.json();
//         setphoto(updatedData.newMessage.file);

//         // setdp(updatedData.dp);
//       } else {
//         console.error(" Error uploading file");
//       }
//     } catch (error) {
//       console.error(" Fetch error:", error);
//     }
//   }

//   return (
//     <div className={styles.bddadiv}>
//       <div className={styles.plus} >
//         <label htmlFor="data"><svg

//           xmlns="http://www.w3.org/2000/svg"
//           height="40px"
//           viewBox="0 -960 960 960"
//           width="40px"
//           fill="#EFEFEF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
//         </svg></label>
//         <input type="file" id="data" name="filehai" onChange={(e)=>{addphoto(e)}} style={{display:"none"}} />
//       </div>
//       {
//         photo!=null ?<Photodata photo={photo}/> : <></>
//       }
//       <div className={styles.input}>
//         <div
//           className={styles.sticker}
//           onClick={() => {
//             console.log("sticker");
//             setsticker(!sticker);
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24px"
//             viewBox="0 -960 960 960"
//             width="24px"
//             fill="#EFEFEF"
//           >
//             <path d="M620-40q-104 0-183.5-62T331-260q45 2 89-9t84-31h164q1-11 1.5-21.5t.5-21.5q0-9-.5-18.5T668-380h-59q16-18 29.5-38t24.5-42h141q-20-30-48-52.5T693-547q5-20 6.5-41t.5-41q96 26 158 105.5T920-340q0 125-87.5 212.5T620-40Zm-95-102q-7-20-12.5-39t-9.5-39h-67q17 25 39.5 45t49.5 33Zm95 14q12-22 20.5-45t14.5-47h-70q6 24 15 47t20 45Zm95-14q27-13 49.5-33t39.5-45h-67q-5 20-10 39t-12 39Zm33-158h88q2-10 3-19.5t1-20.5q0-11-1-20.5t-3-19.5h-88q1 9 1.5 18.5t.5 18.5q0 11-.5 21.5T748-300Zm-408-20q-125 0-212.5-87.5T40-620q0-125 87.5-212.5T340-920q125 0 212.5 87.5T640-620q0 125-87.5 212.5T340-320Zm0-80q91 0 155.5-64.5T560-620q0-91-64.5-155.5T340-840q-91 0-155.5 64.5T120-620q0 91 64.5 155.5T340-400ZM240-640q17 0 28.5-11.5T280-680q0-17-11.5-28.5T240-720q-17 0-28.5 11.5T200-680q0 17 11.5 28.5T240-640Zm100 176q48 0 85.5-27t54.5-69H200q17 42 54.5 69t85.5 27Zm100-176q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680q0 17 11.5 28.5T440-640Zm-100 20Z" />
//           </svg>
//         </div>
//         <input
//           type="text"
//           placeholder="Type a message"
//           value={value}
//           onChange={(e) => {
//             changedata(e);
//           }}
//           onFocus={() => {
//             setsticker((pre) => {
//               false;
//             });
//           }}
//         />
//       </div>
//       {sticker && (
//         <ul className={styles.stickerdata}>
//           {stickers.map((emoji, index) => (
//             <li
//               key={index}
//               className={styles.lists}
//               onClick={() => {
//                 setvalue(value + emoji);
//               }}
//             >
//               {emoji}
//             </li>
//           ))}
//         </ul>
//       )}
//       <button
//         className={styles.mic}
//         onClick={() => {
//           sendmessage();
//         }}
//       >
//         {/* if(value.trim()==="")
//                  return;
//              const newMessage = { */}
//         {/* //         sender: "me",
//         //         message: value,
//         //         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         //     };

//         //     setmessages(prevMessages => ({ */}
//         {/* //         ...prevMessages,
//         //         [selectid]: [...(prevMessages[selectid] || []), newMessage]
//         //     }));

//         //     setvalue("");
//         //     setsticker((pre)=>{false});  */}

//         <svg
//           className={styles.send}
//           xmlns="http://www.w3.org/2000/svg"
//           height="24px"
//           viewBox="0 -960 960 960"
//           width="24px"
//           fill="#EFEFEF"
//         >
//           <path d="M120-160v-240l320-80-320-80v-240l760 320-760 320Z" />
//         </svg>
//       </button>
//     </div>
//   );
// }
// export default ChatFooter;
