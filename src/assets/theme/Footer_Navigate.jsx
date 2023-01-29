import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { RiCalendar2Line } from 'react-icons/ri';
import { HiOutlineUser } from 'react-icons/hi';
import Typography from '../../component/Typography/Typography';

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
  #Icon_CSS_Home {
    width: 26px;
    height: 26px;
    cursor: pointer;
    margin-bottom: 4px;
  }
  #Icon_CSS_Cal {
    width: 26px;
    height: 26px;
    cursor: pointer;
    margin-bottom: 4px;
  }
  #Icon_CSS_My {
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
const Footer_Navigate = () => {
  const navigate = useNavigate();

  const navigateTofile = () => {
    navigate('/');
  };

  //클릭시 색을 바꿀때 이를 담당하는 색깔 변수들
  const [home_Color, setHome_Color] = React.useState('#1D1E1F');
  const [cal_Color, setCal_Color] = React.useState('#1D1E1F');
  const [my_Color, setMy_Color] = React.useState('#1D1E1F');

  return (
    <>
      <Container>
        <Wrapper>
          <EachWrapper
            style={{ color: home_Color }}
            onClick={() => {
              setHome_Color('#05be70');
              setCal_Color('#1D1E1F');
              setMy_Color('#1D1E1F');
              navigate('/main');
            }}
          >
            <MdHomeFilled id='Icon_CSS_Home' />
            <Typography fontSize='10px' color={my_Color}>
              홈
            </Typography>
          </EachWrapper>
          <EachWrapper
            style={{ color: cal_Color }}
            onClick={() => {
              setHome_Color('#1D1E1F');
              setCal_Color('#05be70');
              setMy_Color('#1D1E1F');
              navigate('/main');
            }}
          >
            <RiCalendar2Line id='Icon_CSS_Cal' />
            <Typography fontSize='10px' color={my_Color}>
              캘린더
            </Typography>
          </EachWrapper>
          <EachWrapper
            style={{ color: my_Color }}
            onClick={() => {
              setHome_Color('#1D1E1F');
              setCal_Color('#1D1E1F');
              setMy_Color('#05be70');
              navigate('/main');
            }}
          >
            <HiOutlineUser id='Icon_CSS_My' />
            <Typography fontSize='10px' color={my_Color}>
              마이
            </Typography>
          </EachWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer_Navigate;
