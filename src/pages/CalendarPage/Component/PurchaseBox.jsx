import React, { useState } from 'react';
import Typography from '../../../component/Typography/Typography';
import Margin from '../../../component/Margin/Margin';
import Flex from '../../../component/Flex/Flex';
import { ReactComponent as Icon } from '../../../assets/svg/sample.svg';

const PurchaseBox = () => {
  return (
    <>
      <Flex flexCenter justify='space-between' style={{ width: '312px' }}>
        <Flex flexCenter>
          <Icon />
          <Margin width='15' />
          <Flex flexCenter column align='stretch'>
            <Typography BoldText>(주)아성다이소_일산점</Typography>
            <Margin height='5' />
            <Typography favoriteVerySmall color='favoriteGray'>
              토끼 인형 외 3건
            </Typography>
          </Flex>
        </Flex>
        <Flex flexCenter column align='end'>
          <Typography BoldText>23,400원</Typography>
          <Margin height='5' />
          <Typography favoriteVerySmall color='favoriteGray'>
            2023-01-30 03:12:31
          </Typography>
        </Flex>
      </Flex>
      <Margin height='25' />
    </>
  );
};

export default PurchaseBox;
