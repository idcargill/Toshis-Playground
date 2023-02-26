import React from 'react';
import Link from 'next/link';
import style from './NavStyle.module.css';

interface NavItemProps {
  displayName: string;
  url: string
}

const NavItem = ({ displayName, url }: NavItemProps) => (
  <Link
    href={url}
    className={style.navItem}
  >
    {displayName}
  </Link>
);

export default NavItem;
