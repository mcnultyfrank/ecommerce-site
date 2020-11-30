import React from "react";
import { Rating, Button } from 'semantic-ui-react'
import styles from "./Card.module.scss";


const Card = (props) => {
  const {name, category, price, description, image, countInStock} = props.product
  return (
    <div className = {styles.card}>
      <img src={image} />
      <h1>{name}</h1>
      <div>
        <h4>{category}</h4>
        <h4>£{price}</h4>
      </div>
      <p>{description}</p>
      <div>
      <Button>Add to cart</Button>
      <Rating icon='star' defaultRating={0} maxRating={5} />
      <p>{countInStock} left in stock</p>
      </div>

    </div>
  );
};

export default Card;
