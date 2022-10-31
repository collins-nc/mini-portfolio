import {React,useEffect} from "react";
import Cursor from "./cursor";
import CursorManager from "./cursor/CursorManager";
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Intro from "./components/intro/Intro";
import LocomotiveScroll from "locomotive-scroll";
import "./locomotive-scroll.css";
import Footer from "./components/footer/Footer";



function App() {
    useEffect(() => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    }, []);
  return (
    <CursorManager>
      <Cursor />
      <div data-scroll-container className="app">
        <Intro/>
        <Hero />
        <Info />
        <Footer/>
      </div>
    </CursorManager>
  );
}

export default App;
