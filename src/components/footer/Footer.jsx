import {React} from 'react'
import "./footer.scss"
import footerImg from "../../image/0_tech-1.jpeg";
import Skill from "../skill/Skill";
import {skills} from "../../Data";
import "boxicons";

function Footer() {

  return (
    <div data-scroll-section data-scroll-section-id="footer"  className="footer">
      <div data-scroll data-scroll-speed="7" className="footer--img">
        <img src={footerImg} alt="footerImg" />
      </div>
      <div className="main__footer">
        <div className="main__footer--top">
          {skills.map((item)=>(
            <Skill left={item.l} mid={item.m} right={item.r}/>
          ))}
        </div>
        <p className="footer__tittle">knowledge_</p>
      </div>
      <div className="footer__right">
        <div className="right__footer--top">
          <a
            href="https://github.com/collins-nc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <box-icon
              color="#464646"
              size="lg"
              type="logo"
              name="github"
            ></box-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/collins-moeketsi-a3b423226/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <box-icon
              color="#464646"
              size="lg"
              name="linkedin"
              type="logo"
            ></box-icon>
          </a>
          <a
            href="https://www.instagram.com/nc_collis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <box-icon
              color="#464646"
              size="lg"
              name="instagram-alt"
              type="logo"
            ></box-icon>
          </a>
        </div>
        <div className="right__footer--bottom">
          <div className="footer--line"></div>
          <a href="mailto:noko.nc@gmail.com">
            <p className="footer--mail">noko.nc@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;