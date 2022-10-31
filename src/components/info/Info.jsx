import React from 'react'
import "./info.scss"
import About from "../about/About";
import Reason from '../reason/Reason';
import me from "../../image/about.jpg";




function Info() {
  return (
    <div data-scroll-section data-scroll-section-id="info" className="info">
      <div className="info--container">
        <About />
        <Reason />
      </div>
      <img
        data-scroll
        data-scroll-speed="5"
        className="about--img"
        src={me}
        alt="me"
      />
    </div>
  );
}

export default Info
