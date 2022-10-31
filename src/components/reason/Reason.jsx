import {React,useContext } from 'react';
import Textcircle from '../textCircle/Textcircle';
import "./reason.scss";
import { CursorContext } from '../../cursor/CursorManager';
import wave from "../../image/0_tech-2.jpeg";
import circle from "../../image/0_circle.png";

function Reason() {
  const mouseContext = useContext(CursorContext);
  return (
    <div className="reason">
      <div data-scroll data-scroll-speed="5" className="wave--img">
        <img src={wave} alt="wave" />
      </div>
      <div data-scroll data-scroll-speed="8" className="circle--img">
        <img src={circle} alt="circle" />
      </div>
      <Textcircle
        float="right"
        text="The reason why I want to join SovTech ;)_  Software Engineering---"
      />
      <p data-scroll data-scroll-speed="1" className="reason--no">2. Why I want to be a Developer at SovTech</p>
      <p
        onMouseEnter={() => {
          mouseContext.setSize("bo");
        }}
        onMouseLeave={() => {
          mouseContext.setSize("sn");
        }}
        className="reason--text"
      >
        I believe SovTech is an exceptional company, it sticks out and glow
        , delivering services on standards that solidify an award-winning
        status. I have been following up on the company for close to a year now,
        seeing how the culture of the company radiates from the media platforms
        is a dream, you can see that not only is the company focused on
        producing work for the purpose of business there is love for the workers
        and growth, an enviroment to be your best, the culture is strong and
        help seems to be one word away.
      </p>
      <p
        onMouseEnter={() => {
          mouseContext.setSize("bo");
        }}
        onMouseLeave={() => {
          mouseContext.setSize("sn");
        }}
        className="reason--text"
      >
        {" "}
        SovTech delivers the best software solutions, custom-made web, mobile
        and cloud software solutions as well as having a highly skilled team
        working together to keep its peak. I want to work at SovTech because I
        believe that SovTech can accelerate my growth in ways I can't even start
        to imagine, guidance from senior developers of a leading custom software
        development company in South Africa, being part of a culture that makes
        work feel like a fun environment, helping in your growth working in
        teams to bring out the best in each other, to learn, gain experience and
        add value to the company at the same time that is why I want to join
        Sovtech
      </p>
    </div>
  );
}

export default Reason