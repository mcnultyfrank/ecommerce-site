import React from "react";
import styles from "./Home.module.scss";
import Header from "../../Components/Header";
import ProductCards from "../../Components/ProductCards";
import Footer from "../../Components/Footer";


const Home = () => {
  return (
    <>
      <Header />
      <ProductCards />
      <Footer />
    </>
  );
};

export default Home;
