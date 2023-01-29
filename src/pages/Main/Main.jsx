import React, { useEffect, useState } from 'react';
import Layout from '../../component/Layout/Layout';
import FooterNavigate from '../../component/FooterNavigate';
import SummaryInfo from './Component/SummaryInfo';
import RecentReciept from './Component/RecentReciept';
import LikeFoodList from './Component/LikeFoodList';
import axios from 'axios';
import Receipts from '../../component/Recetpt/Receipts';

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
      <Receipts receipts={receipts} />
      <LikeFoodList />
    </Layout>
  );
};

export default Main;
