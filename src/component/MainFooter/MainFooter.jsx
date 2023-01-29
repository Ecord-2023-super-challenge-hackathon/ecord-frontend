import styled from 'styled-components';
import Margin from '../Margin/Margin';
import Typography from '../Typography/Typography';
import Flex from '../Flex/Flex';
import { ReactComponent as Starbucks } from '../../assets/svg/Starbucks.svg';

const Wrapper = styled.div`
  width: 100%;
  padding-left: 26px;
  padding-right: 26px;
`;

const FlexContainer = styled(Flex)``;

const LogoWrapper = styled.div`
  width: 73px;
  height: 73px;
  border-radius: 50%;
  background-color: ${(props) => (props.color ? props.color : 'white')};
  ${(props) => props.theme.flex.flexCenterColumn}
  vertical-align: middle;
`;

const MainFooter = () => {
  return (
    <Wrapper>
      <Typography SubTitle>요즘 내가 빠진 음식</Typography>
      <Margin height='14' />
      <Flex>
        <LogoWrapper color='#C6DED4'>
          <Starbucks width='32' />
        </LogoWrapper>
      </Flex>
      <Starbucks />
    </Wrapper>
  );
};

export default MainFooter;
