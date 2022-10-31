import React, { useEffect, useRef } from "react";
import "./project.scss";
import gatsby from "../../image/gatsby.png";
import "boxicons";

function Project({ number, project, description, src}) {
    const hoverImg = useRef(null);
    const imgContain = useRef(null);
    useEffect(() => {
        imgContain.current.addEventListener("mouseenter", () => {
          hoverImg.current.style.display = "block";
        });        
        imgContain.current.addEventListener("mouseleave", () => {
          hoverImg.current.style.display = "none";
        });

    }, [])
    
  return (
    <div ref={imgContain} className="project">
      <img src={src} alt={number} ref={hoverImg} className="hover--img" />
      <p className="project--no">{number} .</p>
      <div className="project--detail">
        <div className="project--info">
          <p className="project--tittle">{project}</p>
          <p className="project--description">{description}</p>
        </div>
        <div className="project--icon">
          {number === 1 && (
            <>
              <box-icon size="lg" type="logo" name="react"></box-icon>
              <box-icon size="lg" name="tailwind-css" type="logo"></box-icon>
            </>
          )}
          {number === 2 && (
            <>
              <box-icon size="lg" type="logo" name="react"></box-icon>
              <img src={gatsby} alt="gatsby-icon" style={{ width: "3em" }} />
            </>
          )}
          {number === 3 && (
            <>
              <box-icon size="lg" type="logo" name="nodejs"></box-icon>
              <box-icon size="lg" name="graphql" type="logo"></box-icon>
              <box-icon size="lg" name="mongodb" type="logo"></box-icon>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
