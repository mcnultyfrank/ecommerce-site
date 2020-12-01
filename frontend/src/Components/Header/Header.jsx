import React, {useState} from "react";
import { Link } from "@reach/router";
import { Dropdown, Menu, Button, Divider, Input } from 'semantic-ui-react'
import styles from "./Header.module.scss";
import products from "../../products.js";
  
const Header = () => {
 
  const [user, setUser] = useState(false);
  
  
  return ( 
    <>
      <header>
        <nav>
        <Menu stackable = {'true'} size = {'medium'} >
        <Menu.Item ><h1 className={styles.titleheader}>
          <Link to = '/'>
          youShop
          </Link>
          </h1></Menu.Item>
      <Menu.Item button = {'true'} className = {styles.navButton}>
      <Link to = '/'>
        Home
        </Link>
        </Menu.Item>
    <Dropdown  text='Shopping' pointing className='link item'>
      <Dropdown.Menu>
        <Dropdown.Header>Categories</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='Electronics'>
            <Dropdown.Menu >
              <Dropdown.Header>Brands</Dropdown.Header>
              {products.map(brand => {
                return <Dropdown.Item>{brand.brand}</Dropdown.Item>})}
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Home Goods</Dropdown.Item>
        <Dropdown.Item>Bedroom</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>My Account</Dropdown.Header>
        <Dropdown.Item>Orders</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Menu position='right'>
        </Menu.Menu>
          <Menu.Item>
            <Input size = {'large'}  icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name={user === false ? 'Log In' : 'Log Out'}
            className = {styles.logInButton}
          />

  </Menu>
        </nav>
      </header>
    </>
  );
};

export default Header;
