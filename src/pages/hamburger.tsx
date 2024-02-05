import Image from 'next/image';
import React, { useState } from 'react';

// CSS For Left position
const leftStyle = {
  cursor: 'pointer',
  'user-select': 'none',
  '-webkit-user-select': 'none',
  border: 'none',
  background: 'none',
  order: 2,

  '@media (min-width: 992px)': {
    order: 3,
    position: 'absolute',
    top: 'max(calc(50% - 24px), 680px)',
  },
};

// CSS for right position
const rightStyle = {
  backgroundColor: 'red',
  position: 'relative',
  left: '500px',
};

const HamburgerIcon = ({ position }: { position: string }) => {
  if (position === 'left') {
    return (
      <div>
        <p>Left Hamburger</p>
        <Image
          alt="tasty image open"
          height={300}
          width={400}
          src="hamburger.svg"
          style={{ ...leftStyle }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <p>Right Hamburger</p>
        <Image
          alt="tasty image"
          height={300}
          width={400}
          src="hamburger.svg"
          style={{ ...rightStyle }}
        />
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

  console.log(hamburgerPosition);
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
        }}
      >
        Toggle Hamburger Position
      </button>
    </div>
  );
};

export default Hamburger;
