import React from 'react';
import { alertClick } from 'src/utils/utilities';

const ButtonTailwind = () => (
  <button
    className="text-white rounded-md bg-emerald-900 p-2 m-2 hover:bg-emerald-400"
    onClick={alertClick}
  >
    Styled with TailwindCss
  </button>
);

export default ButtonTailwind;
