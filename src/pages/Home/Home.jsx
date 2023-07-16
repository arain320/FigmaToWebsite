import React from "react";
import Hero from "../../components/Hero/Hero";
import Offer from "../../components/Offer/Offer";
import Service from "../../components/Service/Service";
import Product from "../../components/Product/Product";
import Order from "../../components/Order/Order";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <Offer />
      <Service />
      <Product />
      <Order />
      <Footer />
    </>
  );
};

export default Home;
