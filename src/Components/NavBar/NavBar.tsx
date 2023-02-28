import React from 'react';
import style from './NavStyle.module.css';
import NavItem from './NavItem';
import NavMobileMenu from './NavMobileMenu';

export const navLinksArray = [
  {
    page: 'Home',
    url: '/',
  },
  {
    page: 'About',
    url: '/about',
  },
  {
    page: 'Github',
    url: '/https://github.com/idcargill/Toshis-Playground',
  },
  {
    page: 'Eagle Hawk',
    url: 'https://www.biologicaldiversity.org/species/mammals/American_pika/natural_history.html',
  },
];

// Navigation
// The linkArray above is looped over, and generates a new NavItem each time.
// Javascript array map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const NavBar = () => (
  <div className={style.navBar}>
    <h6 className={style.navHeading}>Navigation</h6>

    <div className={style.navLinkFlex}>

      {navLinksArray.map((link, index) => (
        <NavItem key={index} displayName={link.page} url={link.url} />
      ))}
      <NavItem displayName="SomePage" url="/somePage" />
    </div>
    <NavMobileMenu />
  </div>
);


export default NavBar;
