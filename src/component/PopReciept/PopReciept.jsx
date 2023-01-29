import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './../Button/Button';
import { FiArrowLeft } from 'react-icons/fi';
import theme from '../../assets/theme/Theme';
import Margin from '../Margin/Margin';
import VatInfo from '../../pages/ReceiptDetail/Component/VatInfo';
import CardInfo from '../../pages/ReceiptDetail/Component/CardInfo';
import ReceiptInfo from '../../pages/ReceiptDetail/Component/ReceiptInfo';

const Background = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(42, 42, 44, 0.76);
  backdrop-filter: blur(3px);
  z-index: 100;
`;

const Container = styled.div`
  width: 360px;
  height: 834px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 51px;
  left: 24px;
`;

const ReceiptWrapper = styled.div`
  width: 284px;
  height: 70vh;
  background: #fbfbfb;
  border-radius: 5px;
  overflow: scroll;
`;

const AlignWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 30px;
  ${(props) => props.theme.flex.flexCenterColumn}
`;

const PopReciept = ({ state, setState }) => {
  const backStyle = {
    cursor: 'pointer',
  };

  const [address, setAddress] = useState('인천광역시 미추홀구 인하로 53');
  const [storeName, setStoreName] = useState('카페삼층 인하대점');

  //구매한 물품, 가격 등등을 나타내는 배열
  const MenuList = [
    { menuName: 'T)제주유기농말차', menuEachPrice: '6300', menuCount: '2', menuTotalPrice: '6300' },
    { menuName: 'S)에스프레소', menuEachPrice: '6300', menuCount: '1', menuTotalPrice: '6300' },
    { menuName: 'S)자몽홍차레몬티', menuEachPrice: '4300', menuCount: '2', menuTotalPrice: '8600' },
    { menuName: '딸기생크림케이크', menuEachPrice: '6300', menuCount: '1', menuTotalPrice: '6300' },
  ];

  //과세물품가액
  const [taxablePrice, settaxablePrice] = useState('27,872');
  //부가세
  const [vat, setVat] = useState('228');
  //합계
  const [totalVat, setTotalVat] = useState('28,100');

  //결제 카드 정보
  const [cardName, setCardName] = useState('0014 현대');
  //카드 비번
  const [cardNumber, setCardNumber] = useState('29481293**434**/00312343');
  // 지불 방법
  const [payMent, setPayMent] = useState('일시불');
  // 얼마 지불했는지
  const [payPrice, setPayPrice] = useState('28,000');

  return (
    <>
      <AnimatePresence>
        {state !== undefined && (
          <Background initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
              <ArrowWrapper>
                <FiArrowLeft
                  style={backStyle}
                  size='24px'
                  color={theme.colors.white}
                  onClick={() => setState(undefined)}
                />
              </ArrowWrapper>
              <Margin height='70' />
              <ReceiptWrapper>
                <Margin height='30' />
                <AlignWrapper>
                  <ReceiptInfo address={address} storeName={storeName} MenuList={MenuList} />
                  <VatInfo taxablePrice={taxablePrice} vat={vat} totalVat={totalVat} />
                  <CardInfo cardName={cardName} cardNumber={cardNumber} payMent={payMent} payPrice={payPrice} />
                </AlignWrapper>
                <Margin height='30' />
              </ReceiptWrapper>
            </Container>
            <ButtonWrapper>
              <Button hover>영수증 보러가기</Button>
            </ButtonWrapper>
          </Background>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopReciept;
