const colors = {
  black: '#1D1E1F',
  realBlack: '#000000',
  darkGray: '#93989C',
  gray: '#B2B5BE',
  lightGray: '#EDF0F7',
  white: '#ffffff',
  backgroundWhite: '#ffffff',
  mainGreen: '#05BE70',
  lightGreen: '#7ddab3',
  receiptGray: '#AAB0B6',
  receiptLine: '#D6DCE2',
  darkGreen: '#1E8D73',
  favoriteGray: '#6F7276',
  PayDayColor: '#A4A4B8',
  calendarBlue: '#444867',
  SpecialGreen: '#327676',
};

const shadow = {
  receiptShadow: `
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  `,
};

const font = {
  Title: `
      font-family: 'Pretendard-bold';
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
    `,
  MainTitle: `
      font-family: 'Pretendard-bold';
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
    `,
  InputText: `
      font-family: 'Pretendard-medium';
      font-weight: 500;
      font-size: 15px;
    `,
  ButtonText: `
      font-family: 'Pretendard-bold';
      font-weight: 700;
      font-size: 15px;
    `,
  SmallText: `
      font-family: 'Pretendard-regular';
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
    `,
  SmallText2: `
  font-family: 'Pretendard-regular';
    font-weight: 400;
    font-size: 12px;
  `,
  ContentText: `
      font-family: 'Pretendard-medium';
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    `,
  FooterText: `
      font-family: 'Pretendard-regular';
      font-weight: 400;
      font-size: 10px;
    `,
  SmallTitleText: `
      font-family: 'Pretendard-bold';
    font-weight: 700;
    font-size: 16px;
  `,
  TooSmallText: `
  font-family: 'Pretendard-regular';
    font-weight: 400;
    font-size: 9px;
  `,
  BoldText: `
  font-family: 'Pretendard-bold';
  font-weight: 700;
  font-size: 12px;
  `,
  favoriteSmall: `
     font-family: 'Pretendard-semibold';
      font-weight: 600;
    font-size: 13px;
    line-height: 13px;
  `,
  favoriteVerySmall: `
      font-family: 'Pretendard-regular';
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
  `,
  subTitle: `
      font-family: 'Pretendard-bold';
   font-weight: 700;
   font-size: 16px;
   line-height: 13px;
  `,
  receiptTitle: `
  font-family: 'Pretendard-bold';
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;  
  `,
  receiptTotal: `
   font-family: 'Pretendard-semibold';
      font-weight: 600;
    font-size: 11px;
    line-height: 16px;
  `,

  receiptSmall: `
   font-family: 'Pretendard-semibold';
      font-weight: 600;
    font-size: 10px;
    line-height: 16px;
    color: ${colors.receiptGray};
  `,

  receiptVerySmall: `
  font-family: 'Pretendard-regular';
    font-weight: 400;
    font-size: 8px;
    line-height: 16px;
    color: ${colors.receiptGray};
  `,
  calendarTitle: `
  font-family: 'Pretendard-medium';
    font-weight: 500;
    font-size: 12px;
  `,
};

const flex = {
  flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  flexCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
};

const theme = {
  colors,
  shadow,
  font,
  flex,
};

export default theme;
