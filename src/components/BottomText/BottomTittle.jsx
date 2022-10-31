import React from "react";

import "./bottomTittle.scss";

function BottomTittle({text}) {
  return (
    <div className='bottomTittle'>
        <p className="marquee">
            <span>{text} </span>
        </p>
        <p className="marquee marquee2">
            <span>{text}</span>
        </p>
    </div>
  )
}

export default BottomTittle