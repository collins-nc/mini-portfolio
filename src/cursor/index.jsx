import React, { useRef, useEffect, useContext } from "react"
import { CursorContext } from "./CursorManager";
import "./style.scss";

export default function Cursor() {
  const mainCursor = useRef(null)
  const {size} = useContext(CursorContext)
  
  useEffect(() => {
   
    document.addEventListener("mousemove", event => {

      const { clientX, clientY } = event
      const mouseX = clientX - mainCursor.current.clientWidth / 2
      const mouseY = clientY - mainCursor.current.clientHeight / 2

      mainCursor.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`


    })
  }, [])

  return (
  
      <div className={`cursor ${size}`} ref={mainCursor}></div>
    
  )
}
