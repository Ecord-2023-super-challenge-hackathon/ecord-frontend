import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // css import
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';
import FooterNavigate from '../../component/FooterNavigate';
import Flex from '../../component/Flex/Flex';
import PurchaseBox from './Component/PurchaseBox';

const InfoWrapper = styled.div`
  width: 100%;
  height: 60%;
  background-color: #f3f9f6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHr = styled.hr`
  width: 312px;
  height: 1px;
  background-color: #dee5e2;
  border: 0;
`;

const CalendarPage = () => {
  const [day, onChange] = useState(new Date());

  function leftPad(value) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }

  function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  }

  return (
    <Layout>
      <Margin height='20' />
      <Calendar onChange={onChange} value={day} locale='en' />
      <Margin height='20' />
      <InfoWrapper>
        <Margin height='22' />
        <Flex flexCenter justify='space-between' style={{ width: '312px' }}>
          <Typography calendarTitle color='calendarBlue'>
            MY ECORD
          </Typography>
          <Typography calendarTitle color='calendarBlue'>
            {toStringByFormatting(day)}{' '}
          </Typography>
        </Flex>
        <Margin height='15' />
        <StyledHr />
        <Margin height='25' />
        <PurchaseBox />
        <PurchaseBox />
        <PurchaseBox />
      </InfoWrapper>
      <FooterNavigate />
    </Layout>
  );
};

export default CalendarPage;
