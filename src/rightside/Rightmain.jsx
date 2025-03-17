


import React, { useContext, useState ,useEffect} from "react";
import Header from "../rightside/rightheader/Header";
import styles from "./Rightmain.module.css";
import Mid from "./rightmid/Mid";
import ChatFooter from "./rightfooter/ChatFooter";
import { UserContext } from "../App";

function Rightmain() {
  const{online,setonline,socket,selectid,userid}=useContext(UserContext)
  const [click, setclick] = useState(false);
  const [isopen, setIsopen] = useState(false);
  const [phototype, setphototype] = useState("");
  

 
  useEffect(() => {
    if(!selectid)return;
    socket.emit("check", { selectid });
  
    const handleFound = () => setonline(true);
    const handleNotFound = () => setonline(false);
    const handleUserStatusUpdate = ({ userid, status }) => {
      if (userid === selectid) {
        setonline(status === "online");
      
      }
    };  
    socket.on("found", handleFound);
    socket.on("notfound", handleNotFound);
    socket.on("update", handleUserStatusUpdate);
    return () => {
      socket.off("found", handleFound);
      socket.off("notfound", handleNotFound);
      socket.off("update-user-status", handleUserStatusUpdate);
    };
  }, [selectid,socket]);
  
  // useEffect(() => {
  //   socket.emit("check", {selectid});
  // }, [selectid,userid]);

  // socket.on("found", () => {
  //   setonline(true);
  // });

  // socket.on("notfound", () => {
  //   setonline(false);
  // });
  return (
    <div className={styles.rightmain}>
      <Header isopen={isopen} setIsopen={setIsopen}/>
      <Mid click={click} setclick={setclick} isopen={isopen} phototype={phototype} />
      <ChatFooter click={click} setclick={setclick}  setphototype={setphototype}/>
    </div>
  );
}

export default Rightmain;
