import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Margin from '../../../component/Margin/Margin';

//요약 정보를 담는 전체적인 Wrapper
const Wrapper = styled.div`
  width: 100%;
`;

//인사말과 관련한 컴포넌트 위치 조정해주는 Wrapper
const TypoWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 50px;
`;

// 인사말 중에 두번째 줄에 글자 줄 맞추기 위한 Wrapper
const CarbonTypoWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;

// 환급금은 관련된 정보를 보여줄 Box
const InfoBox = styled.div`
  width: 100%;
  height: 91px;
  margin-top: 25px;
  background-color: #05be70;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InfoBoxTypoWrapper = styled.div`
  width: 220px;
  height: auto;
  padding-left: 20px;

  display: flex;
  flex-wrap: wrap;
  line-height: 23px;
`;

const CircleProgressBarWrapper = styled.div`
  width: 47px;
  height: 47px;
  margin-right: 26px;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
`;

const SummaryInfo = () => {
  //-> 이부분만 axoios로 값들 가져와서 바꿔주면 될듯
  // 이용자 이름
  const [userName, setUserName] = useState('지애');
  // 탄소 배출 막은 무게
  const [carbonEmissions, setCarbonEmissions] = useState(45);
  // 환급까지 남은 횟수
  const [issuances, setIssuances] = useState(4);
  // progressBar 퍼센트
  const [percentage, setPercentage] = useState(70);

  return (
    <>
      <Wrapper>
        <TypoWrapper>
          <Typography MainTitle fontSize='19px'>
            {userName}님, 환영해요!
          </Typography>
          <CarbonTypoWrapper>
            <Typography MainTitle fontSize='19px'>
              이번 달
            </Typography>
            <Typography MainTitle fontSize='19px' color='mainGreen'>
              <span style={{ paddingLeft: '4px' }} />
              {carbonEmissions}g의 탄소 배출
            </Typography>
            <Typography MainTitle fontSize='19px'>
              을 막았어요
            </Typography>
          </CarbonTypoWrapper>
          <InfoBox>
            <InfoBoxTypoWrapper>
              <Typography ButtonText color='white'>
                1000원 환급<span style={{ opacity: '0.7' }}>까지</span>
              </Typography>
              <Typography ButtonText color='white'>
                <span style={{ opacity: '0.7' }}>앞으로</span> {issuances}회 발급{' '}
                <span style={{ opacity: '0.7' }}>남았어요!</span>
              </Typography>
            </InfoBoxTypoWrapper>
            <CircleProgressBarWrapper>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={9}
                styles={buildStyles({
                  strokeLinecap: 'butt',
                  pathTransition: 'none',

                  pathColor: `rgb(255,255,255,${percentage / 100})`,
                  textColor: '#FFFFFF',
                  trailColor: `rgb(255,255,255,${percentage / 100})`,
                  backgroundColor: '#FFFFFF',
                })}
              />
            </CircleProgressBarWrapper>
          </InfoBox>
        </TypoWrapper>
        <Margin height='30' />
      </Wrapper>
    </>
  );
};

export default SummaryInfo;
