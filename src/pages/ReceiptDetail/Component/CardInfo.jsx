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

const DayWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: right;
  margin-right: 24px;
`;

const CardInfo = (props) => {
  return (
    <>
      <Wrapper>
        <EachWrapper>
          <Typography SmallText2>{props.cardName}</Typography>
          <Typography SmallText2>{props.cardNumber}</Typography>
        </EachWrapper>
        <EachWrapper>
          <Typography SmallText2>카드결제(IC)</Typography>
          <Typography SmallText2>
            {props.payMent},{props.payPrice}
          </Typography>
        </EachWrapper>

        <DayWrapper style={{ marginTop: '25px', textAlign: 'right' }}>
          <Typography SmallText2 color='PayDayColor'>
            {props.payDay}
          </Typography>
        </DayWrapper>
      </Wrapper>
    </>
  );
};

export default CardInfo;
