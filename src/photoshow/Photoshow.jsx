import React from 'react'
import style from '../photoshow/Photoshow.module.css'
function Photoshow({file,file2,setshow1}) {
    console.log(file)
  return (
    <div className={style.bddadiv} onContextMenu={(e)=>{e.preventDefault() 
    setshow1(false)}}>
      {file?<img className={style.photo}
        
        src={`http://localhost:8000/uploads/msgdata/${file}`}
        alt="" /> :null}
         {file2?<img className={style.photo}
        
        src={`http://localhost:8000/uploads/${file2}`}
        alt="" /> :null}
    </div>
  )
}

export default Photoshow