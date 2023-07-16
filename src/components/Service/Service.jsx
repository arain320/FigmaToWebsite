import React from "react";
import "./Service.scss";
import serviceImg from "../../assets/service.svg";
import hour from "../../assets/about/24hour.png";
import chef from "../../assets/about/chef.png";
import kitchen from "../../assets/about/kitchen.png";
import order from "../../assets/about/order.png";
import reserved from "../../assets/about/reserved.png";
import restaurant from "../../assets/about/restaurant.png";

const Service = () => {
  return (
    <>
      <section className="service-section" id="service">
        <div className="service">
          <div className="service-image-container">
            <div className="image-wrapper">
              <img src={serviceImg} alt="service image" />
            </div>
          </div>
          <div className="service-content-container">
            <div className="content-wrapper">
              <div className="content-heading">
                <h2>
                  We are <span className="red-text">more</span> than
                  <span className="orange-text"> multiple</span> service
                </h2>
              </div>
              <div className="content-desc">
                <p>
                  This is a type of resturent which typically serves food and
                  drink, in addition to light refreshments such as baked goods
                  or snacks. The term comes frome the rench word meaning food
                </p>
              </div>
              <div className="content-flex-boxs">
                <div className="box-wrapper">
                  <div className="flex-box-icon">
                    <img src={order} alt="online order" />
                  </div>
                  <div className="flex-box-text">
                    <p>Online Order</p>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="flex-box-icon">
                    <img src={hour} alt="24/7 Service" />
                  </div>
                  <div className="flex-box-text">
                    <p>24/7 Service</p>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="flex-box-icon">
                    <img src={reserved} alt="Pre-Reservation" />
                  </div>
                  <div className="flex-box-text">
                    <p>Pre-Reservation</p>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="flex-box-icon">
                    <img src={restaurant} alt="Oragonized Foodhut Place" />
                  </div>
                  <div className="flex-box-text">
                    <p>Oragonized Foodhut Place</p>
                  </div>
                </div>

                <div className="box-wrapper">
                  <div className="flex-box-icon">
                    <img src={chef} alt="Super Chef" />
                  </div>
                  <div className="flex-box-text">
                    <p>Super Chef</p>
                  </div>
                </div>
                <div className="box-wrapper">
                  <div className="flex-box-icon">
                    <img src={kitchen} alt="Clean Kitchen" />
                  </div>
                  <div className="flex-box-text">
                    <p>Clean Kitchen</p>
                  </div>
                </div>
              </div>
              <div className="content-button">
                <button className="btn">About us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
