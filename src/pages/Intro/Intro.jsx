import React from 'react';
import { ReactComponent as Intro_Image } from '../../assets/svg/Intro_Image.svg';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import Typography from '../../component/Typography/Typography';
import Button from '../../component/Button/Button';
import { useNavigate } from 'react-router-dom';

const BigTextWrapper = styled.div`
  width: 310px;
  height: 40px;
  display: flex;
  padding-left: 0px;
  margin-top: 110px;
`;

const BigTextWrapper2 = styled.div`
  width: 310px;
  height: 40px;
  display: flex;
  padding-left: 0px;
  margin-top: 0px;
`;

const SmallTextWrapper = styled.div`
  width: 333px;
  height: 20px;
  display: flex;
  margin-top: 18px;
  margin-left: 24px;
`;

const SmallTextWrapper2 = styled.div`
  width: 333px;
  height: 20px;
  display: flex;
  margin-top: 0px;
  margin-left: 24px;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-top: 90px;
  margin-left: 91px;
`;

const ButtonWrapper = styled.div`
  margin-top: 120px;
`;

const LoginWrapper = styled.div`
  width: 162px;
  margin-top: 14px;
`;

const SmallQuestion = styled.div`
  float: left;
  width: 115px;
  height: 22px;
`;
const SmallLogin = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  float: right;
  width: 47px;
  height: 22px;
`;

const Intro = () => {

  const navigate = useNavigate();

  const onClickSuccess = () => {
    navigate("/Login");
  };

  return (
    <Layout>
      <BigTextWrapper>
        <Typography Title>나의 오늘을</Typography>
      </BigTextWrapper>
      <BigTextWrapper2>
        <Typography Title>푸르게 기록하다.</Typography>
      </BigTextWrapper2>
      <SmallTextWrapper>
        <Typography ContentText color='darkGray'>영수증 버려달라는 말은 이제 넣어두세요.</Typography>
      </SmallTextWrapper>
      <SmallTextWrapper2>
        <Typography ContentText color='darkGray'>에코드와 함께 전자영수증을 간편하게 관리해요.</Typography>
      </SmallTextWrapper2>
      <ImageWrapper>
        <Intro_Image></Intro_Image>
      </ImageWrapper>
      <ButtonWrapper>
        <Button onClick={onClickSuccess}>에코드 시작하기</Button>
      </ButtonWrapper>
      <LoginWrapper>
        <SmallQuestion>
          <Typography ContentText>이미 회원이신가요?</Typography>
        </SmallQuestion>
        <SmallLogin>
          <Typography ContentText color='mainGreen' onClick={onClickSuccess}>로그인</Typography>
        </SmallLogin>
      </LoginWrapper>
    </Layout>
  );
};

export default Intro;

