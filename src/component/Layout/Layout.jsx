import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  width: 360px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundWhite};
`;

const Layout = ({ children }) => <Background>{children}</Background>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
