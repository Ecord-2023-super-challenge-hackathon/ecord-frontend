import React from 'react';
import Layout from '../../component/Layout/Layout';
import Button from '../../component/Button/Button';
import FooterNavigate from '../../component/FooterNavigate';
import { ReactComponent as Ecord_Title } from '../../assets/svg/Ecord_Title.svg';
import { ReactComponent as Ecord } from '../../assets/svg/Ecord.svg';
import { ReactComponent as Intro_Image } from '../../assets/svg/Intro_Image.svg';
import Typography from '../../component/Typography/Typography';
import MainFooter from '../../component/MainFooter/MainFooter';

const Main = () => {
  return (
    <Layout>
      <Ecord_Title />
      <Ecord />
      <Intro_Image />
      <Button hover>시작하기</Button>
      <div>Main dd</div>
      <Typography Title>야호애호</Typography>
      <Typography MainTitle>야호애호</Typography>
      <Typography InputText>야호애호</Typography>
      <Typography ButtonText>야호애호</Typography>
      <Typography SamllText>야호애호</Typography>
      <Typography ContentText>야호애호</Typography>
      <Typography FooterText>야호애호</Typography>
      <MainFooter />
      <FooterNavigate />
    </Layout>
  );
};

export default Main;
