import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Width = styled.div`
  height: 834px;
  margin: 0 auto;
  width: 360px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin-bottom: 78px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundWhite};
`;

const Layout = ({ children }) => (
  <Background>
    <Width>{children}</Width>
  </Background>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
