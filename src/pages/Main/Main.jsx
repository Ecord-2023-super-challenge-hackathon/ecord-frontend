import React, { useEffect, useState } from 'react';
import Layout from '../../component/Layout/Layout';
import FooterNavigate from '../../component/FooterNavigate';
import MainFooter from '../../component/MainFooter/MainFooter';
import Receipts from '../../component/Receipt/Receipts';
import SummaryInfo from './Component/SummaryInfo';
import RecentReciept from './Component/RecentReciept';
import Pusher from 'pusher-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PopReciept from '../../component/PopReciept/PopReciept';
import { motion } from 'framer-motion';

const Main = () => {
  const [state, setState] = useState(null);
  const [receipts, setReceipts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [receiptsLen, setReceiptLen] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const user_index = localStorage.getItem('user_index');
    console.log(process.env.REACT_APP_API);
    axios
      .get(`${process.env.REACT_APP_API}/users/${user_index}/receipts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((r) => {
        setReceipts(r.data);
        console.log('Main =', r.data.length);
        setReceiptLen(r.data.length);
      });

    axios
      .get(`${process.env.REACT_APP_API}/users/${user_index}/favorite-food`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((r) => {
        setFavorites(r.data);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('355b90c48a1eaff96f03', {
      cluster: 'ap3',
      encrypted: true,
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      setState(data);
    });
    console.log(state);
  }, [state]);

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.7 }}
      >
        <Layout>
          {state && <PopReciept state={state} setState={setState} />}
          <SummaryInfo receiptsLength={receiptsLen} />
          <MainFooter favorites={favorites} />
          <RecentReciept />
          <FooterNavigate />
          <Receipts receipts={receipts} />
        </Layout>
      </motion.div>
    </>
  );
};

export default Main;
