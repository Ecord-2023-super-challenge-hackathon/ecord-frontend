import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 296px;
  height: 44px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.colors.mainGreen};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.font.ButtonText}

  ${(props) =>
    props.hover &&
    css`
      transition: 0.5s;
      :hover {
        background-color: ${(props) => props.theme.colors.lightGreen};
        transition: 0.5s;
      }
    `}

  ${(props) =>
    props.textButton &&
    css`
      width: auto;
      height: auto;
      padding: 0;
      background: none;
      color: ${(props) => props.theme.colors.green};
      ${props.theme.font.SamllText};
    `}
  
  color: ${(props) => {
    switch (props.color) {
      case 'black':
        return `${props.theme.colors.black}`;
      case 'realBlack':
        return `${props.theme.colors.realBlack}`;
      case 'gray':
        return `${props.theme.colors.gray}`;
      case 'darkGray':
        return `${props.theme.colors.darkGray}`;
      default:
        return '';
    }
  }}
`;

const Button = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

export default Button;
