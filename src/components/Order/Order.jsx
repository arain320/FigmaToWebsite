import React from "react";
import "./Order.scss";
import orderImg from "../../assets/order.svg";
import googleImg from "../../assets/google.png";
import appleImg from "../../assets/apple.png";

const Order = () => {
  return (
    <>
      <section className="order-section">
        <div className="order">
          <div className="order__content-container">
            <div className="order__content-heading">
              <h2>
                It’s Now <span className="red-text"> More Easy </span> to
                <span className="orange-text"> Order </span> by Our Mobile
                <span className="red-text"> App </span>
              </h2>
            </div>
            <div className="order__content-desc">
              <p>
                All you need to do is downlode one of the best delivery apps,
                make a and most companies are opting for mobile app devlopment
                for food delivery
              </p>
            </div>
            <div className="order__content-buttons">
              <div className="order__playstore-button">
                <div className="playstore-icon">
                  <img src={googleImg} alt="playstore icon" />
                </div>
                <div className="playstore-content">
                  <p>Get It On</p>
                  <p>Google Play</p>
                </div>
              </div>
              <div className="order__apple-button">
                <div className="apple-icon">
                  <img src={appleImg} alt="apple store icon" />
                </div>
                <div className="apple-content">
                  <p>Download On The</p>
                  <p>Apple Store</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order__image-container">
            <div className="order__image-wrapper">
              <img src={orderImg} alt="order-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
