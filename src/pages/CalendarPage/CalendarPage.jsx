import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // css import
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';
import FooterNavigate from '../../component/FooterNavigate';

const InfoWrapper = styled.div`
  width: 100%;
  height: 70%;
  background-color: #f3f9f6;
`;

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Layout>
      <Margin height='20' />
      <Calendar onChange={onChange} value={value} locale='en' />
      <Margin height='20' />
      <InfoWrapper></InfoWrapper>
      <FooterNavigate />
    </Layout>
  );
};

export default CalendarPage;
