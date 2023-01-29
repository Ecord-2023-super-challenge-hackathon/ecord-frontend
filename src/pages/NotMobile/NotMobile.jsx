import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Ecord_Title_w } from '../../assets/svg/Ecord_Title_w.svg';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: none;
  @media (min-width: 600px) {
    ${(props) => props.theme.flex.flexCenterColumn}
  }
  vertical-align: middle;
`;

const NotMobile = () => {
  return (
    <Wrapper>
      <Ecord_Title_w width='100px' height='50px' />
      <Margin height='10' />
      <Typography MainTitle color='white'>
        이런!
      </Typography>
      <Typography SmallText color='white'>
        Ecord는 데스크톱 환경을 지원하지 않아요.
      </Typography>
      <Margin height='13' />
      <Typography FooterText color='gray'>
        화면의 크기를 줄이거나,
      </Typography>
      <Margin height='4' />
      <Typography FooterText color='gray'>
        모바일 환경으로 접속해주세요.
      </Typography>
    </Wrapper>
  );
};

export default NotMobile;
