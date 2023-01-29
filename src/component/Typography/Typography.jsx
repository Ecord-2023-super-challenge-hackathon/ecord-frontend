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
<<<<<<< HEAD
  ${(props) => props.SmallTitleText && props.theme.font.SmallTitleText}
=======
  ${(props) => props.receiptSmall && props.theme.font.receiptSmall}
  ${(props) => props.receiptTitle && props.theme.font.receiptTitle}
  ${(props) => props.receiptVerySmall && props.theme.font.receiptVerySmall}
  ${(props) => props.receiptTotal && props.theme.font.receiptTotal}
>>>>>>> dee791c8e0fa183b550ce8383c642f9e5cc408c1
`;

export default Typography;
