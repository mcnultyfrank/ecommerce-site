import React from "react";
import { Menu } from 'semantic-ui-react'

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
        <Menu stackable = {'true'} >
        <Menu.Item
          name='editorials'
          // active={activeItem === 'editorials'}
          // onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>

        <Menu.Item
          name='reviews'
          // active={activeItem === 'reviews'}
          // onClick={this.handleItemClick}
        >
          Terms & Conditions
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Footer;
