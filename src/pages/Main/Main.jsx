import React, { useEffect, useState } from 'react';
import Layout from '../../component/Layout/Layout';
import FooterNavigate from '../../component/FooterNavigate';
import { ReactComponent as Ecord_Title } from '../../assets/svg/Ecord_Title.svg';
import { ReactComponent as Ecord } from '../../assets/svg/Ecord.svg';
import { ReactComponent as Intro_Image } from '../../assets/svg/Intro_Image.svg';
import SummaryInfo from './Component/SummaryInfo';
import RecentReciept from './Component/RecentReciept';
import LikeFoodList from './Component/LikeFoodList';

const Main = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    const user_index = localStorage.getItem('user_index');
    axios
      .get(`${process.env.REACT_APP_API}/users/${user_index}/receipts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((r) => {
        console.log(r.data);
        setReceipts(r.data);
      });
  }, []);

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
