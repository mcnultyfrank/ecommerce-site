import React, {useState, useEffect} from "react";
import styles from "./ProductCards.module.scss";
import Card from "./Card";
import axios from 'axios'

const ProductCards = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
  const getProducts = async () => {
    const {data} = await axios.get('/api/products')
    setProducts(data)
  }
  getProducts();
  }, [])
  


  return (
    <div className = {styles.cardContainer}>
      {products.map((product) => {
        return <Card  product = {product}/>
      })}
    </div>
  );
};

export default ProductCards;
