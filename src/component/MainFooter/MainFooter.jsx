import styled from 'styled-components';
import Margin from '../Margin/Margin';
import Typography from '../Typography/Typography';
import Flex from '../Flex/Flex';
import Favorite from './Favorite';

const Wrapper = styled.div`
  width: 100%;
  padding-left: 26px;
  padding-right: 26px;
`;

const MainFooter = ({ favorites }) => {
  console.log(favorites);
  return (
    <Wrapper>
      <Typography SubTitle>요즘 내가 빠진 음식</Typography>
      <Margin height='14' />
      <Flex flexCenter justify='space-between'>
        <Favorite data={favorites[0]} key={0} color='#C6DED4' />
        <Favorite data={favorites[1]} key={1} color='#dfe4ee' />
        <Favorite data={favorites[2]} key={2} color='#dacde4' />
      </Flex>
    </Wrapper>
  );
};

export default MainFooter;
