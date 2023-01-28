const colors = {
  black: '#1D1E1F',
  realBlack: '#000000',
  darkGray: '#93989C',
  gray: '#B2B5BE',
  lightGray: '#EDF0F7',
  white: '#ffffff',
  backgroundWhite: '#ffffff',
  mainGreen: '#05BE70',
};

const shadow = {
  componentShadow: `
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
      line-height: 22px;
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
