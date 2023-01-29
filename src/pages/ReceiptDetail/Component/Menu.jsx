import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const MenuNameWrapper = styled.div``;

const MenuPriceWrapper = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
`;

const Menu = (props) => {
  return (
    <>
      <Wrapper>
        <MenuNameWrapper>
          <Typography SmallText>{props.menuName}</Typography>
        </MenuNameWrapper>
        <MenuPriceWrapper>
          <Typography SmallText>{props.menuEachPrice}</Typography>

          <Typography SmallText>{props.menuCount}</Typography>

          <Typography SmallText>{props.menuTotalPrice}</Typography>
        </MenuPriceWrapper>
      </Wrapper>
    </>
  );
};

export default Menu;
