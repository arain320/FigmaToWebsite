import React from "react";
import "./Hero.scss";
import Header from "../Header/Header";
import { BiSearch } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import mainImage from "../../assets/hero/mainsvg1.svg";
import orange from "../../assets/hero/orange.png";
import delivery from "../../assets/hero/delivery.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <Header />
        <div className="hero">
          <div className="hero-content">
            <div className="hero-box">
              <div className="hero-box-icon">
                <AiFillHeart className="heart-icon" />
              </div>
              <div className="hero-box-text">
                <p>People Trust us</p>
              </div>
            </div>
            <div className="hero-main-text">
              <h1>
                We're <span className="serious">Serious</span> For{" "}
                <span className="food">Food</span> &
                <span className="delivery"> Delivery</span>.
              </h1>
              <img src={orange} alt="orange image" className="orangeImg" />
              <img
                src={delivery}
                alt="delivery image"
                className="deliveryImg"
              />
            </div>
            <div className="hero-desc">
              <p>
                Best cooks and best delivery guys all at your service. Hot tasty
                food will reach you in 60 minutes.
              </p>
            </div>
            <div className="hero-search-container">
              <div className="hero-search-container-wrapper">
                <BiSearch className="black-icon-search" />
                <input type="text" placeholder="Search food" />
                <div className="icon-center">
                  <BiSearch />
                </div>
              </div>
            </div>
            <div className="hero-button">
              <button className="btn">Download App</button>
              <div className="play-video-button">
                <div className="white-center-icon">
                  <BsFillPlayFill />
                </div>
                <span>Watch Video</span>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <img src={mainImage} alt="hero section image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
