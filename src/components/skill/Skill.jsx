import React from 'react'
import "./skill.scss"

function Skill({left,mid,right}) {
  return (
    <div className="skill">
      <div className="skill__bar"></div>
      <div className="skill__block">
        {left!==""&&(<div className="skill--tl">
            <box-icon type='solid' name='chevron-right'></box-icon>
            <p>{left}</p>
        </div>)}
        {mid!==""&&(<div className="skill--tl skill--mid">
            <box-icon type='solid' name='chevron-right'></box-icon>
            <p>{mid}</p>
        </div>)}
        {right !== "" && (
            <div className="skill--tl">
            <box-icon type='solid' name='chevron-right'></box-icon>
            <p>{right}</p>
            </div>
        )}
      </div>
    </div>
  );
}

export default Skill