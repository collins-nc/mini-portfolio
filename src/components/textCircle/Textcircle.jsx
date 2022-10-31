import React from 'react'
import "./textCircle.scss";
import CircleType from "circletype";
import { useEffect, useRef } from "react";


function Textcircle({text,float}) {
     const rotated = useRef(null);

     useEffect(() => {
       new CircleType(rotated.current).radius(80);
     }, []);

  return (
      <div style={{float:float}} className="circular--text">
        <span ref={rotated}>
          {text}
        </span>
      </div>
  );
}

export default Textcircle