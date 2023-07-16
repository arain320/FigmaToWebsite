import React from "react";
import "./Footer.scss";
import { BiLogoFacebook } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__top-container">
        <div className="footer__top-wrapper">
          <div className="footer__top-left">
            <div className="footer__top-left-logo">
              <h3>Foodhut</h3>
            </div>
            <div className="footer__top-left-desc">
              <p>
                I saw this design in figma and i try my best to convert the
                design into a pixel perfect website
              </p>
              <a href="https://www.figma.com/file/57K0DfjPGHjZwnraoQ6Cvo/Food-Hut-(-Food-Ordering-Responsive-Design)-(Community)?node-id=118%3A686&mode=dev">
                If your want to check the figme link please click here
              </a>
            </div>
            <div className="footer__top-left-social-links">
              <BiLogoFacebook className="footer-icon" />
              <FiInstagram className="footer-icon" />
              <FaTwitter className="footer-icon" />
            </div>
          </div>
          <div className="footer__top-center">
            <div className="footer__top-center-flex">
              <div className="footer__top-center-flex-heading">
                <h3>About Us</h3>
              </div>
              <div className="footer__top-center-flex-links">
                <li>About Us</li>
                <li>Service Us</li>
                <li>Contact</li>
                <li>Company</li>
              </div>
            </div>
            <div className="footer__top-center-flex">
              <div className="footer__top-center-flex-heading">
                <h3>Company</h3>
              </div>
              <div className="footer__top-center-flex-links">
                <li>Partnership</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Sitemap</li>
              </div>
            </div>
          </div>
          <div className="footer__top-right">
            <div className="footer__top-right-heading">
              <h3>Get in touch</h3>
            </div>
            <div className="footer__top-right-desc">
              <p>IF you want to know me more please checkout my portfolio</p>
              <a href="https://hasnainsaleem.netlify.app/">portfolio link</a>
            </div>
            <div className="footer__top-right-form">
              <input type="email" placeholder="Email" />
              <button className="footer-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom-container">
        <p>Copyright © {date} | Hasnain</p>
      </div>
    </footer>
  );
};

export default Footer;
