import React from 'react';
import style from './style/TitleStyle.module.css';

interface TitleProps {
  title: string;
  subHeading?: string;
}

const Title = ({ title, subHeading }: TitleProps) => (
  <div className={style.title}>
    <h2>{title}</h2>
    {subHeading ? <p>{subHeading}</p> : null}
  </div>
);


export default Title;
