import styled from 'styled-components';

const Typography = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.black)};

  ${(props) => props.Title && props.theme.font.Title}
  ${(props) => props.MainTitle && props.theme.font.MainTitle}
  ${(props) => props.InputText && props.theme.font.InputText}
  ${(props) => props.ButtonText && props.theme.font.ButtonText}
  ${(props) => props.SmallText && props.theme.font.SmallText}
  ${(props) => props.ContentText && props.theme.font.ContentText}
  ${(props) => props.FooterText && props.theme.font.FooterText}
`;

export default Typography;