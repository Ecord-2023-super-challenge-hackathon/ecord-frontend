import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { RiCalendar2Line } from 'react-icons/ri';
import { HiOutlineUser } from 'react-icons/hi';
import Typography from './Typography/Typography';

const Container = styled.div`
  position: fixed;
  background-color: #ffffff;
  bottom: 0px;
  height: 78px;
  width: 360px;
  border-top: 1px solid #73767a;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  #IconCssHome {
    width: 26px;
    height: 26px;
    cursor: pointer;
    margin-bottom: 4px;
  }
  #IconCssCal {
    width: 26px;
    height: 26px;
    cursor: pointer;
    margin-bottom: 4px;
  }
  #IconCssMy {
    width: 26px;
    height: 26px;
    cursor: pointer;
    margin-bottom: 4px;
  }
`;

//아이콘, 글을 포함하는 컴포넌트
const EachWrapper = styled.div`
  width: auto;
  height: auto;
  text-align: center;

  &:hover {
    color: #05be70;
  }
`;

//클릭시 페이지 이동할 네이게이트 함수
const FooterNavigate = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/main');
  };

  const naviageToCal = () => {
    navigate('/calendar');
  };

  //홈 화면 만들어지면 바꿔야함.
  const navigateToMy = () => {
    navigate('/main');
  };

  //클릭시 색을 바꿀때 이를 담당하는 색깔 변수들
  const [homeColor, setHomeColor] = React.useState('#05be70');
  const [calColor, setCalColor] = React.useState('#1D1E1F');
  const [myColor, setMyColor] = React.useState('#1D1E1F');

  return (
    <>
      <Container>
        <Wrapper>
          <EachWrapper
            style={{ color: homeColor }}
            onClick={() => {
              setHomeColor('#05be70');
              setCalColor('#1D1E1F');
              setMyColor('#1D1E1F');
              navigate('/main');
            }}
          >
            <MdHomeFilled id='IconCssHome' />
            <Typography fontSize='10px' color={myColor}>
              홈
            </Typography>
          </EachWrapper>
          <EachWrapper
            style={{ color: calColor }}
            onClick={() => {
              setHomeColor('#1D1E1F');
              setCalColor('#05be70');
              setMyColor('#1D1E1F');
              navigate('/calendar');
            }}
          >
            <RiCalendar2Line id='IconCssCal' />
            <Typography fontSize='10px' color={myColor}>
              캘린더
            </Typography>
          </EachWrapper>
          <EachWrapper
            style={{ color: myColor }}
            onClick={() => {
              setHomeColor('#1D1E1F');
              setCalColor('#1D1E1F');
              setMyColor('#05be70');
              navigate('/main');
            }}
          >
            <HiOutlineUser id='IconCssMy' />
            <Typography fontSize='10px' color={myColor}>
              마이
            </Typography>
          </EachWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default FooterNavigate;
