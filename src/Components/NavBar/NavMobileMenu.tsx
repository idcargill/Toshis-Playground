import React, { useState } from 'react';
import NavItem from './NavItem';
import { navLinksArray } from './NavBar';
import style from './NavStyle.module.css';


const NavMobileMenu = () => {
  const [show, setShow ] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggle} className={`${style.navMobileButton} ${style.navItem}`}>Menu</button>
      <div id="mobile link container" className={style.navMobileLinks}>
        {show
          ? navLinksArray.map((link, idx) => (
            <NavItem key={idx} url={link.url} displayName={link.page} />
            ))
            : null
          }
        </div>
    </div>
  );

};

export default NavMobileMenu;
