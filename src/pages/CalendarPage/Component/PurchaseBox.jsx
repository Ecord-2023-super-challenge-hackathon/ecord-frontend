import React, { useState } from 'react';
import Typography from '../../../component/Typography/Typography';
import Margin from '../../../component/Margin/Margin';
import Flex from '../../../component/Flex/Flex';
import { ReactComponent as Icon } from '../../../assets/svg/sample.svg';

const PurchaseBox = ({ data, day }) => {
  return (
    <>
      <Flex flexCenter justify='space-between' style={{ width: '312px' }}>
        <Flex flexCenter>
          <Icon />
          <Margin width='15' />
          <Flex flexCenter column align='stretch'>
            <Typography BoldText>{data.brand_name}</Typography>
            <Margin height='5' />
            <Typography favoriteVerySmall color='favoriteGray'>
              {data.ea.length === 1
                ? data.product_name[0]
                : data.product_name[0] + ' 외 ' + (data.ea.length - 1) + '건'}
            </Typography>
          </Flex>
        </Flex>
        <Flex flexCenter column align='end'>
          <Typography BoldText>{data.total_cost}원</Typography>
          <Margin height='5' />
          <Typography favoriteVerySmall color='favoriteGray'>
            {day}
          </Typography>
        </Flex>
      </Flex>
      <Margin height='25' />
    </>
  );
};

export default PurchaseBox;
