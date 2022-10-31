import React, { useEffect, useRef } from 'react'
import "./intro.scss";

function Intro() {
  const intro= useRef(null);

  useEffect(() => {
      setTimeout(() => {
        intro.current.remove();
      }, 7000);
  }, [])
  

    
  return (
    <div ref={intro} className="intro">
      <div className="intro--typewriter">
        <p className='intro--text'>Hello Sovtech..</p>
        
      </div>
    
    </div>
  )
}

export default Intro