import React from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';

const Wrapper = styled.div`
  width: 100%;
  //나중에 auto로 바꾸기
  height: 300px;
`;

//제목 정렬을 위한 Wrapper
const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 24px;
  display: flex;
  text-align: center;
  align-items: center;
`;

const LikeFoodList = () => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Typography SmallTitleText>요즘 내가 빠진 음식</Typography>
        </TitleWrapper>
      </Wrapper>
    </>
  );
};

export default LikeFoodList;
