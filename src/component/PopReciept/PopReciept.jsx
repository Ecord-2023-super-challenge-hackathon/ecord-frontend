import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './../Button/Button';
import { FiArrowLeft } from 'react-icons/fi';
import theme from '../../assets/theme/Theme';
import Margin from '../Margin/Margin';

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

const TextWrapper = styled.div`
  width: 236px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 30px;
  ${(props) => props.theme.flex.flexCenterColumn}
`;

const PopReciept = () => {
  const backStyle = {
    cursor: 'pointer',
  };
  return (
    <>
      <AnimatePresence>
        <Background initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Container>
            <ArrowWrapper>
              <FiArrowLeft style={backStyle} size='24px' color={theme.colors.white} />
            </ArrowWrapper>
            <Margin height='70' />
            <ReceiptWrapper>
              <TextWrapper></TextWrapper>
            </ReceiptWrapper>
          </Container>
          <ButtonWrapper>
            <Button hover>영수증 보러가기</Button>
          </ButtonWrapper>
        </Background>
      </AnimatePresence>
    </>
  );
};

export default PopReciept;
