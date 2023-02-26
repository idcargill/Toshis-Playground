import React from 'react';
import style from './buttonStyle.module.css';
import { alertClick } from 'src/utils/utilities';

const ButtonModule = () => (
  <button
    className={style.buttonStyle}
    onClick={alertClick}
  >
    Styled with ModuleCss
  </button>
);

export default ButtonModule;
