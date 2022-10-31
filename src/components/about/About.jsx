import {React,useContext} from "react";
import Textcircle from "../textCircle/Textcircle";
import "./about.scss";
import { CursorContext } from "../../cursor/CursorManager";


function About() {
  const mouseContext = useContext(CursorContext);
  

  
  return (
    <div className="about">
      <Textcircle
        text="An inside on who I really am, thoughts an character: Who I am -"
        float="left"
      />
      <div className="about__content">
        <p data-scroll data-scroll-speed="1" className="about--no">
          1. About
        </p>
        <p
          onMouseEnter={() => {
            mouseContext.setSize("bn");
          }}
          onMouseLeave={() => {
            mouseContext.setSize("small");
          }}
          className="about--text"
        >
          My name is Collins I completed my studies towards a National Diploma
          in Computer Systems Engineering majoring in software engineering. My
          interest in software development started back in 2012 when my brother
          was bought a computer. I went from playing video games to lurking
          around the internet wondering how it is possible to have access to
          more videos than my eyes can take, to having information around the
          world with just a few clicks, this was candy land for me, I wanted to
          be part of this from the user interface design to the software behind
          it all. Passionate and curious, from udemy courses, documentations and
          sifting through youtube videos. I enjoy learning new technology
          keeping up to date and working with people to bring out solutions and
          great ideas, I find that team work can build an individual
          exponentianly, getting different views of thinking and acting on
          things. My goal is to be the best I can be, then push that boundary to
          become one of the best in the industry for the love and rush of it
          all. In my free time, I play video games, read a book or play tennis
          to freshen up.
        </p>
      </div>
    </div>
  );
}

export default About;
