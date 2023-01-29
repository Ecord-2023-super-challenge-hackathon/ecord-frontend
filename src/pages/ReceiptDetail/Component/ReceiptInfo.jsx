import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';
import Menu from './Menu';
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 24px;
`;

const TitleMargin = styled.div`
  width: auto;
  height: auto;
  margin-top: 6px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #dad7d4;
`;

const MenuWrapper = styled.div`
  width: 236px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #dad7d4;
`;

const ReceiptInfo = (props) => {
  const { MenuList, costList } = props;
  console.log(MenuList);

  return (
    <>
      <Wrapper>
        <Typography TooSmallText color='receiptGray'>
          {props.address}
        </Typography>
        <TitleMargin>
          <Typography>{props.storeName}</Typography>
        </TitleMargin>
        <MenuWrapper>
          {MenuList &&
            MenuList.map((v, i) => (
              <Menu key={i} menuName={v} menuEachPrice={costList[i]} menuCount='1' menuTotalPrice={costList[i]} />
            ))}
        </MenuWrapper>
      </Wrapper>
    </>
  );
};

export default ReceiptInfo;
