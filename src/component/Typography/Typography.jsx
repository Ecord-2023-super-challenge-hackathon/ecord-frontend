import styled from 'styled-components';

const Typography = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.black)};

  ${(props) => props.Title && props.theme.font.Title}
  ${(props) => props.MainTitle && props.theme.font.MainTitle}
  ${(props) => props.InputText && props.theme.font.InputText}
  ${(props) => props.ButtonText && props.theme.font.ButtonText}
  ${(props) => props.SmallText && props.theme.font.SmallText}
  ${(props) => props.SmallText2 && props.theme.font.SmallText2}
  ${(props) => props.ContentText && props.theme.font.ContentText}
  ${(props) => props.FooterText && props.theme.font.FooterText}
  ${(props) => props.subTitle && props.theme.font.subTitle}
  ${(props) => props.SmallTitleText && props.theme.font.SmallTitleText}
  ${(props) => props.TooSmallText && props.theme.font.TooSmallText}
  ${(props) => props.receiptSmall && props.theme.font.receiptSmall}
  ${(props) => props.receiptTitle && props.theme.font.receiptTitle}
  ${(props) => props.receiptVerySmall && props.theme.font.receiptVerySmall}
  ${(props) => props.receiptTotal && props.theme.font.receiptTotal}
  ${(props) => props.BoldText && props.theme.font.BoldText}
  ${(props) => props.favoriteSmall && props.theme.font.favoriteSmall}
  ${(props) => props.favoriteVerySmall && props.theme.font.favoriteVerySmall}
  ${(props) => props.calendarTitle && props.theme.font.calendarTitle}
`;

export default Typography;
