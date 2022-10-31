import React from "react";
import { useEffect, useRef } from "react";
import "./eyes.scss"


function Eyes() {
  const eyes = useRef(null);
  const leftEye = useRef(null);
  const rightEye = useRef(null);

    useEffect(() => {

        window.addEventListener("mousemove",(event) => {
            const x = (leftEye.current.offsetLeft) + (leftEye.current.clientWidth/ 2);
            const y = (rightEye.current.offsetTop) + (rightEye.current.clientHeight/ 2);
            const rad = Math.atan2(event.pageX - x, event.pageY - y);
            const rot = (rad * (180 / Math.PI) * -1) + 180;
            leftEye.current.style.transform = `rotate(${rot}deg)`;
            rightEye.current.style.transform = `rotate(${rot}deg)`;
            
        });
    }, [])
    

  return (
    <div ref={eyes} className="eyes">
    <div className='.container'>
      <div ref={leftEye} className='eye'></div>
      <div ref={rightEye} className='eye'></div>
    </div>
  </div>
  )
}

export default Eyes;

