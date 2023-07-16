import React from "react";
import "./Offer.scss";
import { AiFillStar } from "react-icons/ai";
import data from "./data";
import cover from "../../assets/offers/cover.png";
import hasnain from "../../assets/offers/hasnain.png";

const Offer = () => {
  console.log(data);
  return (
    <>
      <section className="offer-section" id="offer">
        <div className="offer">
          <div className="offer-main-heading">
            <h2>
              Today <span>special</span> offers
            </h2>
          </div>
          <div className="offer-desc">
            <p>
              Eating a wide variety of nutritious foods, including fruit,
              vegetables, nuts, seeds, and lean protein can help support your
              overall health
            </p>
          </div>
          <div className="offer-card-container">
            <div className="offer-card">
              {data.length > 0
                ? data.map((item) => {
                    return (
                      <>
                        <div className="offer-card-box" key={item.id}>
                          <div className="box-cover">
                            <img src={cover} alt="cover image" />
                          </div>
                          <div className="box-image">
                            <img src={item.image} alt="offer image" />
                          </div>
                          <div className="box-price">
                            <span>{item.price}</span>$
                          </div>
                          <div className="box-flex">
                            <div className="box-flex-images">
                              <div className="flex-image">
                                <img src={hasnain} alt="small image" />
                              </div>
                              <div className="flex-image">
                                <img src={hasnain} alt="small image" />
                              </div>
                              <div className="flex-image">
                                <img src={hasnain} alt="small image" />
                              </div>
                            </div>
                            <div className="box-flex-star">
                              <AiFillStar className="yellow-icon" />
                              <span>({item.star})</span>
                            </div>
                          </div>
                          <div className="box-name">
                            <p>{item.name}</p>
                          </div>
                          <div className="box-desc">
                            <p>{item.desc}</p>
                          </div>
                          <div className="box-button">
                            <button className="btn">Order Now</button>
                          </div>
                        </div>
                        ;
                      </>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
