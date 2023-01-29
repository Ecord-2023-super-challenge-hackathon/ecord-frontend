import React from 'react';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typography';
import { IoIosArrowForward } from 'react-icons/io';
import Receipts from '../../../component/Receipt/Receipts';
//요약 정보를 담는 전체적인 Wrapper
const Wrapper = styled.div`
  width: 100%;
  //나중에 auto로 바꾸기
  height: auto;
  margin-top: 30px;
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

const RecentReciept = () => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Typography SmallTitleText>최근 전자 영수증</Typography>
          <span style={{ padding: '2px' }} />
          <IoIosArrowForward color='#93989C' size='25' />
        </TitleWrapper>
      </Wrapper>
    </>
  );
};

export default RecentReciept;
