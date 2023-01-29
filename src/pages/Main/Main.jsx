import React, { useEffect, useState } from 'react';
import Layout from '../../component/Layout/Layout';
import Button from '../../component/Button/Button';
import FooterNavigate from '../../component/FooterNavigate';
import { ReactComponent as Ecord_Title } from '../../assets/svg/Ecord_Title.svg';
import { ReactComponent as Ecord } from '../../assets/svg/Ecord.svg';
import { ReactComponent as Intro_Image } from '../../assets/svg/Intro_Image.svg';
import Receipt from '../../component/Recetpt/Receipt';
import axios from 'axios';

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
      <FooterNavigate />
      {receipts.map((data) => {
        console.log(data);
        return <Receipt data={data} key={data.receipt_index} />;
      })}
    </Layout>
  );
};

export default Main;
