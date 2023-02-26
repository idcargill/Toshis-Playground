import React from 'react';
import Title from 'src/Components/ModuleComponents/TitleComponent/Title';
import ButtonModule from 'src/Components/ModuleComponents/ButtonComponent/ButtonModule';
import ButtonTailwind from 'src/Components/TailwindComponents/ButtonTailwind';

import NavBar from 'src/Components/NavBar/NavBar';
const HomePageLayout = () => (
  <>
    <Title
      title="Hello Toshi!"
      subHeading="welcome to your playground bruh"
    />
    <NavBar />
    <ButtonModule />
    <ButtonTailwind />
  </>
);

export default HomePageLayout;
