import React from 'react';
import Title from 'src/Components/ModuleComponents/TitleComponent/Title';
import ButtonModule from 'src/Components/ModuleComponents/ButtonComponent/ButtonModule';
import ButtonTailwind from 'src/Components/TailwindComponents/ButtonTailwind';


const HomePageLayout = () => (
  <>
    <Title
      title="Hello Toshi!"
      subHeading="welcome to your playground bruh"
    />
    <ButtonModule />
    <ButtonTailwind />
  </>
);

export default HomePageLayout;
