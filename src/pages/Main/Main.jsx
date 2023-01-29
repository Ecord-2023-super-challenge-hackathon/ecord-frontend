import React from 'react';
import Layout from '../../component/Layout/Layout';
import Button from '../../component/Button/Button';
import FooterNavigate from '../../component/FooterNavigate';
import { ReactComponent as Ecord_Title } from '../../assets/svg/Ecord_Title.svg';
import { ReactComponent as Ecord } from '../../assets/svg/Ecord.svg';
import { ReactComponent as Intro_Image } from '../../assets/svg/Intro_Image.svg';
import SummaryInfo from './Component/SummaryInfo';
import RecentReciept from './Component/RecentReciept';
import LikeFoodList from './Component/LikeFoodList';

const Main = () => {
  return (
    <Layout>
      <SummaryInfo />
      <RecentReciept />
      <FooterNavigate />
      <LikeFoodList />
    </Layout>
  );
};

export default Main;
