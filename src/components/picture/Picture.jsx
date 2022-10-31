import React from 'react'
import "./picture.scss"
import myPic from "../../image/me.jpg"


function Picture() {

  return (
    <div data-scroll data-scroll-speed="2"
      className="myPic--wrap"
    >
      <img className={"myPic mask"} src={myPic} alt="me" />
    </div>
  );
}

export default Picture