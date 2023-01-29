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
import { useNavigate } from 'react-router-dom';

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

const PopReciept = ({ state = [], setState }) => {
  const backStyle = {
    cursor: 'pointer',
  };
  const navigate = useNavigate();

  const {
    address,
    brand_name,
    product_name,
    serial_number,
    cost,
    receipt_index,
    total_cost,
    card_company,
    card_number,
  } = state;

  const goToReceiptDetail = () => {
    navigate(`/receipt/${state.receipt_index}`);
  };

  return (
    <>
      <AnimatePresence>
        {state !== undefined && (
          <Background initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
              <ArrowWrapper>
                <FiArrowLeft style={backStyle} size='24px' color={theme.colors.white} onClick={() => setState(null)} />
              </ArrowWrapper>
              <Margin height='70' />
              <ReceiptWrapper>
                <Margin height='30' />
                <AlignWrapper>
                  <ReceiptInfo address={address} storeName={brand_name} MenuList={product_name} costList={cost} />
                  <VatInfo taxablePrice={serial_number} vat={receipt_index} totalVat={total_cost} />
                  <CardInfo cardName={card_company} cardNumber={card_number} payMent='일시불' payPrice={total_cost} />
                </AlignWrapper>
                <Margin height='30' />
              </ReceiptWrapper>
            </Container>
            <ButtonWrapper>
              <Button hover onClick={goToReceiptDetail}>
                영수증 보러가기
              </Button>
            </ButtonWrapper>
          </Background>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopReciept;
