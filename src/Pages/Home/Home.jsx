import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../../public/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";



const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero_banner" className="banner-img" />
      

      <div className="hero-caption">
        <img src={hero_title} alt="herotitle" className="caption-img" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          exercitationem. Molestiae soluta ipsum odio aperiam ducimus, optio
          sapiente nulla. Nostrum maiores labore debitis cumque, sunt aspernatur
          id voluptates fuga possimus.
        </p>
        <div className="hero-btns">
          <button className="btn "><img src={play_icon} alt=""  /> &nbsp;<span className="play">Play</span></button>
          <button className="btn dark-btn"><img src={info_icon} alt="" />&nbsp;<span className="play">More Info</span></button>
          
        </div>
      <TitleCards/>
      </div>
      </div>
       <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
        <TitleCards title={"Only on Netflix"} category={"top_rated"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Topics for you"} category={"now_playing"} />
       </div>
       <Footer/>
    </div>
    
  );
};

export default Home;
