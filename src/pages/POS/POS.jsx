import React from 'react';
import Layout from '../../component/Layout/Layout';
import axios from 'axios';
import Lottie from 'react-lottie';
import LottieData from '../../assets/lottie/POS.json';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';
import Button from '../../component/Button/Button';
import Toast from '../../component/Toast/Toast';

const POS = () => {
  const onClickFunction = () => {
    axios.post('http://43.207.42.44:4000/message', 'sender send');
    console.log('sender success');
    Toast('결제가 완료되었습니다.');
  };

  const onCheck = () => {
    Toast('결제가 완료되었습니다.');
  };

  const defaultOptions = {
    //예제1
    loop: true,
    autoplay: true,
    animationData: LottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Layout>
      <Margin height='50' />
      <Typography Title style={{ width: '296px' }}>
        POS 결제
      </Typography>
      <Margin height='10' />
      <Typography ContentText color='darkGray' style={{ width: '296px' }}>
        Pusher Web socket 결제 정보 전송 페이지입니다.
      </Typography>
      <Margin height='5' />
      <Typography ContentText color='darkGray' style={{ width: '296px' }}>
        하단의 버튼을 눌러 결제 정보를 전송하세요.
      </Typography>
      <Margin height='70' />
      <Lottie options={defaultOptions} height={300} width={300} isClickToPauseDisabled={true} />
      <Margin height='80' />
      <Button onClick={onClickFunction} bgColor='#2962f6'>
        결제하기
      </Button>
      <Button onClick={onCheck} bgColor='#2962f6'>
        결제하기
      </Button>
    </Layout>
  );
};

export default POS;
