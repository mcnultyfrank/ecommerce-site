import React from "react";
import { Dropdown, Menu, Button, Divider } from 'semantic-ui-react'

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header>
        <nav>
        <Menu>
        <Menu.Item><h1 className={styles.titleheader}>youShop</h1></Menu.Item>
    <Menu.Item className = {styles.navButton}>Home</Menu.Item>
    <Dropdown text='Shopping' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Categories</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='Clothing'>
            <Dropdown.Menu>
              <Dropdown.Header>Mens</Dropdown.Header>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Jeans</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Womens</Dropdown.Header>
              <Dropdown.Item>Dresses</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Item>Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Contact Us</Menu.Item>
    <Menu.Item>Log In</Menu.Item>



  </Menu>
        </nav>
      </header>
    </>
  );
};

export default Header;
