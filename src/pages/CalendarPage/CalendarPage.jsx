import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // css import
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';
import FooterNavigate from '../../component/FooterNavigate';
import Flex from '../../component/Flex/Flex';
import PurchaseBox from './Component/PurchaseBox';
import axios from 'axios';
import UpScrollBox from './Component/UpScrollBox';
import MapLog from '../MapLog/MapLog';
import { motion } from 'framer-motion';

const InfoWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f3f9f6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHr = styled.hr`
  width: 312px;
  height: 1px;
  background-color: #dee5e2;
  border: 0;
`;

const ScrollBox = styled.div`
  width: 312px;
  height: 300px;
  overflow: scroll;
`;

const CalendarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [day, onChange] = useState(new Date());
  const [receipts, setReceipts] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState([]);

  function leftPad(value) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }

  function toStringByFormatting(source, delimiter = '.') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  }

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
      });
  }, []);

  useEffect(() => {
    setSelectedReceipt(receipts.filter((r) => r.date === toStringByFormatting(day)));
    console.log(selectedReceipt);
  }, [day]);

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.7 }}
      >
        <Layout>
          <Margin height='20' />
          <Calendar onChange={onChange} value={day} locale='en' />
          <Margin height='20' />
          <InfoWrapper>
            <Margin height='22' />
            <Flex flexCenter justify='space-between' style={{ width: '312px' }}>
              <Typography calendarTitle color='calendarBlue'>
                MY ECORD
              </Typography>
              <Typography calendarTitle color='calendarBlue'>
                {toStringByFormatting(day)}{' '}
              </Typography>
            </Flex>
            <Margin height='15' />
            <StyledHr />
            <Margin height='25' />
            {selectedReceipt.length === 0 ? (
              <>
                <Margin height='20' />
                <Typography BoldText>결제 내역이 없어요.</Typography>
              </>
            ) : (
              <ScrollBox>
                {selectedReceipt.map((data) => (
                  <PurchaseBox
                    id={data.receipt_index}
                    data={data}
                    key={data.receipt_index}
                    day={toStringByFormatting(day)}
                  />
                ))}
                <Margin height='20' />
              </ScrollBox>
            )}
          </InfoWrapper>
          <MapLog isOpen={isOpen} setIsOpen={setIsOpen} />
        </Layout>
      </motion.div>
    </>
  );
};

export default CalendarPage;
