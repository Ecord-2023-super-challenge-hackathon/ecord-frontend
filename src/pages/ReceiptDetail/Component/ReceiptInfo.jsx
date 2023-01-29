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

const ReceiptInfo = () => {
  const [address, setAddress] = useState('인천광역시 미추홀구 인하로 53');
  const [storeName, setStoreName] = useState('카페삼층 인하대점');

  const MenuList = [
    { menuName: 'T)제주유기농말차', menuEachPrice: '6300', menuCount: '1', menuTotalPrice: '6300' },
    { menuName: 'S)에스프레소', menuEachPrice: '6300', menuCount: '1', menuTotalPrice: '6300' },
    { menuName: 'S)자몽홍차레몬티', menuEachPrice: '4300', menuCount: '2', menuTotalPrice: '8600' },
    { menuName: '딸기생크림케이크', menuEachPrice: '6300', menuCount: '1', menuTotalPrice: '6300' },
  ];

  let MenuView = MenuList.map((v) => (
    <Menu
      menuName={v.menuName}
      menuEachPrice={v.menuEachPrice}
      menuCount={v.menuCount}
      menuTotalPrice={v.menuTotalPrice}
    />
  ));

  return (
    <>
      <Wrapper>
        <Typography TooSmallText color='receiptGray'>
          {address}
        </Typography>
        <TitleMargin>
          <Typography>{storeName}</Typography>
        </TitleMargin>
        <MenuWrapper>{MenuView}</MenuWrapper>
      </Wrapper>
    </>
  );
};

export default ReceiptInfo;
