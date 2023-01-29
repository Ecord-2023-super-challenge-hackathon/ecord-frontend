import styled from 'styled-components';
import Margin from '../Margin/Margin';
import Typography from '../Typography/Typography';
import Flex from '../Flex/Flex';

const Wrapper = styled.div`
  width: 100%;
  padding-left: 26px;
  padding-right: 26px;
`;

const FlexContainer = styled(Flex)`
  ${(props) => props.theme.flex.flexCenter}
  justify-content: space-between;
`;

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

const MainFooter = ({ data }) => {
  const { brand_name, receipt_img_url, product_name, ea, date, total_cost } = data;

  return (
    <Wrapper>
      <Typography SubTitle>요즘 내가 빠진 음식</Typography>
      <Margin height='14' />
      <FlexContainer>
        <Flex>
          <LogoWrapper color='#C6DED4'>
            <Photo src={`${process.env.REACT_APP_API}${receipt_img_url}`} />
          </LogoWrapper>
        </Flex>
      </FlexContainer>
    </Wrapper>
  );
};

export default MainFooter;
