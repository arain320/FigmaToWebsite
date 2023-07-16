import React from "react";
import "./Product.scss";
import { AiFillStar } from "react-icons/ai";
import data from "./data";
import cover from "../../assets/offers/cover.png";
import hasnain from "../../assets/offers/hasnain.png";

const Product = () => {
  return (
    <>
      <section className="product-section" id="product">
        <div className="product">
          <div className="product-main-heading">
            <h2>
              <span className="red-text-product">Menu</span> that
              <span className="orange-text-product"> always </span>
              make you fall in <span className="red-text-product">love</span>
            </h2>
          </div>
          <div className="product-flex-button">
            <button className="product-btn active-btn">Roman</button>
            <button className="product-btn">Breakfast</button>
            <button className="product-btn">Lunch</button>
            <button className="product-btn">Dinner</button>
            <button className="product-btn">Maxican</button>
            <button className="product-btn">Italian</button>
            <button className="product-btn">Desserts</button>
            <button className="product-btn">Drinks</button>
          </div>
          <div className="product-card-container">
            <div className="product-card-wrapper">
              {data.length > 0
                ? data.map((item) => {
                    return (
                      <>
                        <div className="product-card-box" key={item.id}>
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

export default Product;
