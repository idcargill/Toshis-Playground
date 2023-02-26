import React from 'react';
import style from './NavStyle.module.css';
import NavItem from './NavItem';

const linkArray = [
  {
    page: 'Home',
    url: '/',
  },
  {
    page: 'About',
    url: '/about',
  },
];

// Navigation
// The linkArray above is looped over, and generates a new NavItem each time.  
// Javascript array map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const NavBar = () => (
  <div className={style.navBar}>
    <h6 className={style.navHeading}>Navigation</h6>

    <div className={style.navLinkFlex}>

      {linkArray.map((link, index) => (
        <NavItem key={index} displayName={link.page} url={link.url} />
      ))}
      <NavItem displayName="Github" url="https://github.com/idcargill/Toshis-Playground" />
      <NavItem displayName="Eagle Hawk" url="https://www.biologicaldiversity.org/species/mammals/American_pika/natural_history.html" />
    </div>
  </div>
);


export default NavBar;
