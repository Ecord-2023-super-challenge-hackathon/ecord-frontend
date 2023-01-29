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
};

const shadow = {
  receiptShadow: `
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  `,
};

const font = {
  Title: `
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
    `,
  MainTitle: `
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
    `,
  InputText: `
      font-weight: 500;
      font-size: 15px;
    `,
  ButtonText: `
      font-weight: 700;
      font-size: 15px;
    `,
  SmallText: `
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
    `,
  ContentText: `
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    `,
  FooterText: `
      font-weight: 400;
      font-size: 10px;
    `,
  SubTitle: `
      font-weight: 700;
      font-size: 16px;
      line-height: 30px;
    `,
  receiptTitle: `
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;  
  `,

  receiptTotal: `
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
  `,

  receiptSmall: `
    font-weight: 600;
    font-size: 10px;
    line-height: 16px;
    color: ${colors.receiptGray};
  `,

  receiptVerySmall: `
    font-weight: 400;
    font-size: 8px;
    line-height: 16px;
    color: ${colors.receiptGray};
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
