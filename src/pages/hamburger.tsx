import Image from 'next/image';
import React, { useState } from 'react';
import style from '../../styles/hamburger.module.css';

const HamburgerIcon = ({ position }: { position: string }) => {
  if (position === 'left') {
    return (
      <div className={style.left}>
        <p>Left Hamburger</p>
        <Image
          alt="tasty image open"
          height={300}
          width={400}
          src="hamburger.svg"
        />
      </div>
    );
  } else {
    return (
      <div className={style.right}>
        <p>Right Hamburger</p>
        <Image alt="tasty image" height={300} width={400} src="hamburger.svg" />
      </div>
    );
  }
};

const Hamburger = () => {
  const [hamburgerPosition, setHamburgerPosition] = useState('left');
  const handleClick = () => {
    const newState = hamburgerPosition === 'left' ? 'right' : 'left';
    setHamburgerPosition(newState);
  };

  return (
    <div style={{ color: 'white' }}>
      <h1>A Hamburger for Toshi</h1>
      <HamburgerIcon position={hamburgerPosition} />
      <button
        onClick={handleClick}
        style={{
          border: '2px solid red',
          padding: '10px',
          margin: '10px',
          borderRadius: '100px',
          position: 'relative',
        }}
      >
        State triggered style changes
      </button>
    </div>
  );
};

export default Hamburger;
