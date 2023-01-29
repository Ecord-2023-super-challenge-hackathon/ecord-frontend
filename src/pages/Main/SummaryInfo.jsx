import React from 'react';
import styled from 'styled-components';
import Typography from '../../component/Typography/Typography';

//요약 정보를 담는 전체적인 Wrapper
const Wrapper = styled.div`
  width: 100%;
  height: 260px;
  border-bottom: 6px solid #eff4f5;
`;
const TypoWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 22px;
  padding-top: 50px;
`;

const SummaryInfo = () => {
  var userName = '지애';
  var carbonEmissions = 45;

  return (
    <>
      <Wrapper>
        <TypoWrapper>
          <Typography MainTitle fontSize='19px'>
            {userName}님, 환영해요!
          </Typography>

          <Typography MainTitle fontSize='19px'>
            이번 달{' '}
            <Typography MainTitle fontSize='19px' color='mainGreen'>
              {carbonEmissions}g의 탄소 배출
            </Typography>
            을 막았어요
          </Typography>
        </TypoWrapper>
      </Wrapper>
    </>
  );
};

export default SummaryInfo;
