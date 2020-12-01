import React from "react";
import { Router } from "@reach/router";
// import {Route} from 'react-router-dom'
import styles from "./Routes.module.scss";
import Home from "../../Components/Home";
import ProductScreen from "../../Components/ProductCards/ProductScreen";

const Routes = () => {
  return (
    <>
      <Router>
        <Home path = "/"/> 
        <ProductScreen path = "/product/:_id" />
      </Router>
    </>

  );
};

export default Routes;
