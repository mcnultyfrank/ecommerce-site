import React from "react";
import styles from "./ProductScreen.module.scss";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import products from "../../../products";
import { Rating, Button } from 'semantic-ui-react'



const ProductScreen = (props) => {

  const product = products.find((item) => item._id === props._id);
  
  

  
  
  return (
    <>
      <Header />
    <div className = {styles.productCardContainer}>
      <div className = {styles.card}>
        <img src={product.image} />
        <h1>{product.name}</h1>
        <div>
          <h4>{product.brand}</h4>
          <h5>{product.category}</h5>
        </div>
        <p>{product.description}</p>
        <Rating icon='star' defaultRating={0} maxRating={5} rating = {product.rating}/>

      </div>
      <div className = {styles.productAddToCart}>
          <Button disabled={product.countInStock > 0 ? false : true} >Add to cart</Button>
          <div>
            <h4>£{product.price}</h4>
            <p>{product.countInStock} left in stock</p>
          </div>
        </div>
        <div className = {styles.productReviewSection}>
        </div>
    </div>  
      <Footer />

    </>
  );
};

export default ProductScreen;
