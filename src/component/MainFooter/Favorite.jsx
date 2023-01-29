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
  height: 34px;
  width: 34px;
  border-radius: 100%;
`;

const Favorite = ({ data, id }) => {
  const { brand_name, receipt_img_url, product_name } = data;
  const color = ['#c6ded4', '#dfe4ee', '#dacde4'];

  return (
    <Flex flexCenter column>
      <LogoWrapper color={color[id]}>
        <Photo src={`${process.env.REACT_APP_API}${receipt_img_url}`} />
      </LogoWrapper>
      <Margin width='95' height='12' />
      <Typography favoriteSmall>{product_name}</Typography>
      <Margin height='2' />
      <Typography favoriteVerySmall color='favoriteGray'>
        {brand_name}
      </Typography>
    </Flex>
  );
};

export default Favorite;
