import React from 'react';
import styled from 'styled-components';

const BigTextWrapper = styled.div`
  width: 210px;
  height: 40px;
  display: flex;
  margin-left: 24px;
  margin-top: 110px;
`;

const SmallTextWrapper = styled.div`
  width: 263px;
  height: 20px;
  display: flex;
  margin-top: 95px;
  margin-left: 24px;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-top: 114px;
  margin-left: 91px;
`;

const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 330px;
`;

const LoginWrapper = styled.div`
  width: 132px;
  margin-top: 54px;
`;

const SmallQuestion = styled.div`
  float: left;
  width: 100px;
  height: 22px;
`;
const SmallLogin = styled.div`
  float: right;
  width: 32px;
  height: 22px;
`;

const Intro = () => {
  return (
    <div>
      <BigTextWrapper>나의 오늘을 푸르게 기록하다</BigTextWrapper>
      <SmallTextWrapper>영수증 버려달라는 말은 이제 넣어두세요.</SmallTextWrapper>
      <SmallTextWrapper>에코드와 함께 전자영수증을 간편하게 관리해요.</SmallTextWrapper>
      <ImageWrapper />
      <ButtonWrapper>에코드 시작하기</ButtonWrapper>
      <LoginWrapper>
        <SmallQuestion>이미 회원이신가요?</SmallQuestion>
        <SmallLogin>로그인</SmallLogin>
      </LoginWrapper>
    </div>
  );
};

export default Intro;
