import BottomTittle from '../BottomText/BottomTittle';
import Eyes from '../Eyes/Eyes';
import Picture from '../picture/Picture';
import "./hero.scss";

function Hero() {


  return (
    <div className="hero" data-scroll-section data-scroll-section-id="hero">
      <div className="hero--container">
        <h3 className="hero__title">software engineer_</h3>
        <div className="hero__name">
          <div style={{ display: "flex" }}>
            <p className="hero__name--text">Hi, i'm</p>
            <Eyes />
            <Picture />
          </div>
          <p className="hero__name--text t-bottom">Collins Moeketsi</p>
        </div>
      </div>
      <BottomTittle text="Grab a coffee let me tell you a story, Who am I and Why I'd love to join SovTech."/>
    </div>
  );
}

export default Hero