import React from 'react';
import NavBar from 'src/Components/NavBar/NavBar';
import Title from 'src/Components/ModuleComponents/TitleComponent/Title';
import style from '../../styles/layout.module.css';

const AboutPage = () => (
  <div className={style.pageContainer}>
    <Title title="About Page" subHeading="Nothing happens here" />
    <NavBar />
  </div>
);

export default AboutPage;
