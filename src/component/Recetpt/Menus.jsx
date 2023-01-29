import styled from 'styled-components';
import Typography from '../Typography/Typography';

const MenuWrapper = styled.div`
  display: flex;
  height: 18px;
  justify-content: space-between;
`;

const LeftMenu = styled.div`
  width: 67px;
`;

const RightMenu = styled.div`
  width: 49px;
  display: flex;
  justify-content: end;
`;

const OtherMenus = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const Menus = ({ menus, ea }) => {
  return (
    <>
      {menus.slice(0, 3).map((menuName, i) => (
        <MenuWrapper>
          <LeftMenu>
            <Typography SmallText>{menuName}</Typography>
          </LeftMenu>
          <RightMenu>
            <Typography SmallText>…… &nbsp; X{ea[i]}</Typography>
          </RightMenu>
        </MenuWrapper>
      ))}
      {menus.length > 3 && (
        <OtherMenus>
          <Typography receiptSmall>외 {menus.length - 3}건</Typography>
        </OtherMenus>
      )}
    </>
  );
};

export default Menus;
