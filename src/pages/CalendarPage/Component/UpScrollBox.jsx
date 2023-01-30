import React from 'react';
import Typography from '../../../component/Typography/Typography';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
const Wrapper = styled.div`
  width: 100%;
  height: 45px;
  position: fixed;
  bottom: 78px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 360px;
  height: 45px;
  background-color: #05be70;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpScrollBox = () => {
  return (
    <>
      <Wrapper>
        <Box>
          <Typography contentText color='backgroundWhite'>
            2022.01.12(화) 확인하기
          </Typography>
          <IoIosArrowUp size={20} style={{ color: 'white' }} />
        </Box>
      </Wrapper>
    </>
  );
};

export default UpScrollBox;
