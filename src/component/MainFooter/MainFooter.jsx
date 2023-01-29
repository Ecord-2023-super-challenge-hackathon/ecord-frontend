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
  return (
    <Wrapper>
      <Typography subTitle>요즘 내가 빠진 음식</Typography>
      <Margin height='24' />
      <Flex flexCenter justify='space-between'>
        {favorites.map((favorite, i) => (
          <Favorite key={i} data={favorite} id={i} />
        ))}
      </Flex>
    </Wrapper>
  );
};

export default MainFooter;
