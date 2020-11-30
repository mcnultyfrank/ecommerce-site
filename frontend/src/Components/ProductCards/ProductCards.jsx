import React from "react";
import styles from "./ProductCards.module.scss";
import Card from "./Card";
import products from "../../products.js";
// import image from "../../product-images/airpods.jpg"
const ProductCards = (props) => {

  return (
    <div className = {styles.cardContainer}>
      {products.map((product) => {
        return <Card  product = {product}/>
      })}
    </div>
  );
};

export default ProductCards;
