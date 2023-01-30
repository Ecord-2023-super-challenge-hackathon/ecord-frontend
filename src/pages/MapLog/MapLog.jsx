import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import FooterNavigate from '../../component/FooterNavigate';
import Receipts from '../../component/Receipt/Receipts';
import Typography from '../../component/Typography/Typography';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import axios from 'axios';
import leaf from './leaf.png';
import map from './Group 6261.png';
import { motion } from 'framer-motion';

const AllWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding-bottom: 80px;

  /* ${(props) => props.isOpen || `height: 120px`} */
  transition: 1s;
  z-index: 2;

  position: fixed;
  top: 0;
  ${(props) => props.isOpen || `top: 84vh`}
`;

const AllLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: '#FFFFFF';
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 400px) {
    width: 360px;
  }
`;

const DaySelectWrapper = styled.div`
  width: 100%;
  height: 45px;
  background-color: #05be70;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const MapMemoWrapper = styled.div`
  width: 326px;
  height: 44px;
  background-color: #eef0f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  border-radius: 10px;
  margin-top: 16px;
`;

const MapMemo = styled.input`
  width: 308px;
  height: 44px;
  background-color: #eef0f3;
  border: none;
  border-radius: 10px;
`;

const ReceiptWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 35px;
`;

const MapLog = ({ isOpen, setIsOpen }) => {
  const [receipts, setReceipts] = useState([]);

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

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.7 }}
      >
        <AllWrapper isOpen={isOpen}>
          <AllLayout>
            <DaySelectWrapper onClick={() => setIsOpen(!isOpen)} style={{ borderRadius: '16px 16px 0px 0px' }}>
              <Typography contentText color='backgroundWhite'>
                2022.01.12(화) 확인하기
              </Typography>
              {isOpen ? (
                <IoIosArrowDown size={20} style={{ position: 'absolute', right: '40px', color: 'white' }} />
              ) : (
                <IoIosArrowUp size={20} style={{ position: 'absolute', right: '40px', color: 'white' }} />
              )}
            </DaySelectWrapper>
            <MapWrapper>
              <img
                src={map}
                id='myMap'
                style={{
                  width: '340px',
                  height: '212px',
                  borderRadius: '10px',
                }}
              ></img>
              <MapMemoWrapper>
                <img src={leaf} style={{ width: '16px', height: '16px', marginRight: '5px' }} />
                <MapMemo placeholder='나의 푸른 기록을 짧게 남겨보세요.' />
              </MapMemoWrapper>
            </MapWrapper>
            <ReceiptWrapper>
              <Typography SmallTitleText style={{ marginLeft: '24px' }}>
                발급한 전자 영수증
              </Typography>
            </ReceiptWrapper>
            <Receipts receipts={receipts} />
            <FooterNavigate />
          </AllLayout>
        </AllWrapper>
      </motion.div>
    </>
  );
};

export default MapLog;
