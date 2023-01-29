import React, { useEffect, useState } from 'react';
import Layout from '../../component/Layout/Layout';
import FooterNavigate from '../../component/FooterNavigate';

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
      <Receipts receipts={receipts} />
    </Layout>
  );
};

export default Main;
