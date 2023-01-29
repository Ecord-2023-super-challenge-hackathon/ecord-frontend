import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const EachWrapper = styled.div`
  width: 80%;
  height: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const CardInfo = () => {
  const [cardName, setCardName] = useState('0014 현대');
  const [cardNumber, setCardNumber] = useState('29481293**434**/00312343');
  const [payMent, setPayMent] = useState('일시불');
  const [payPrice, setPayPrice] = useState('28,100');

  return (
    <>
      <Wrapper>
        <EachWrapper>
          <Typography SmallText2>{cardName}</Typography>
          <Typography SmallText2>{cardNumber}</Typography>
        </EachWrapper>
        <EachWrapper>
          <Typography SmallText2>카드결제(IC)</Typography>
          <Typography SmallText2>
            {payMent},{payPrice}
          </Typography>
        </EachWrapper>
      </Wrapper>
    </>
  );
};

export default CardInfo;
