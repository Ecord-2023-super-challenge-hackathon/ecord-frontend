import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px dashed #dad7d4;
  margin-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const EachWrapper = styled.div`
  width: 80%;
  height: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const VatInfo = ({ taxablePrice, vat, totalVat }) => {
  return (
    <>
      <Wrapper>
        <EachWrapper>
          <Typography SmallText2>과세물품가액</Typography>
          <Typography SmallText2>{taxablePrice}</Typography>
        </EachWrapper>
        <EachWrapper>
          <Typography SmallText2>부가세</Typography>
          <Typography SmallText2>{vat}</Typography>
        </EachWrapper>
        <EachWrapper>
          <Typography BoldText>합계</Typography>
          <Typography BoldText>{totalVat}</Typography>
        </EachWrapper>
      </Wrapper>
    </>
  );
};

export default VatInfo;
