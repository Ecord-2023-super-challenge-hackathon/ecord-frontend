import styled from 'styled-components';
import Margin from '../Margin/Margin';
import Typography from '../Typography/Typography';
import Flex from '../Flex/Flex';

const LogoWrapper = styled.div`
  width: 73px;
  height: 73px;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : 'white')};
  ${(props) => props.theme.flex.flexCenterColumn}
  vertical-align: middle;
`;

const Photo = styled.img`
  width: 73px;
  height: 73px;
  border-radius: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const Favorite = ({ data }) => {
  const { img, name, address } = data;

  return (
    <Flex flexCenter column>
      <Photo src={img} />
      <Margin width='95' height='12' />
      <Typography favoriteSmall>{name}</Typography>
      <Margin height='2' />
      <Typography favoriteVerySmall color='favoriteGray'>
        {address}
      </Typography>
    </Flex>
  );
};

export default Favorite;
