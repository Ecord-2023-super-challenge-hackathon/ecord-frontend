import styled from 'styled-components';
import Margin from '../Margin/Margin';
import Typography from '../Typography/Typography';
import Flex from '../Flex/Flex';
import Favorite from './Favorite';
import a1 from './1.png';
import a2 from './2.png';
import a3 from './3.png';

const Wrapper = styled.div`
  width: 100%;
  padding-left: 26px;
  padding-right: 26px;
`;

const MainFooter = () => {
  const data = [
    {
      img: a1,
      name: '자몽 허브 블랙티',
      address: '스타벅스 일산점',
    },
    {
      img: a2,
      name: '부드러운 우유식빵',
      address: '파리바게트 용현점',
    },
    {
      img: a3,
      name: '젤리셔스 콜라맛',
      address: 'CU 일산점',
    },
  ];

  return (
    <Wrapper>
      <Typography subTitle>요즘 내가 빠진 음식</Typography>
      <Margin height='24' />
      <Flex flexCenter justify='space-between'>
        {data.map((data, i) => (
          <Favorite key={i} data={data} id={i} />
        ))}
      </Flex>
    </Wrapper>
  );
};

export default MainFooter;
