import React from 'react';
import Layout from '../../component/Layout/Layout';
import Button from '../../component/Button/Button';
import { ReactComponent as Ecord_Title } from '../../assets/svg/Ecord_Title.svg';
import { ReactComponent as Ecord } from '../../assets/svg/Ecord.svg';
import { ReactComponent as Intro_Image } from '../../assets/svg/Intro_Image.svg';

const Main = () => {
  return (
    <Layout>
      <Ecord_Title />
      <Ecord />
      <Intro_Image />
      <Button hover>시작하기</Button>
      <div>Main dd</div>
    </Layout>
  );
};

export default Main;
