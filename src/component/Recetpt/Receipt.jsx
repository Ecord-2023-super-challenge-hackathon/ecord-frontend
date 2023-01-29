import styled from 'styled-components';
import { SlOptions } from 'react-icons/sl';
import Typography from '../Typography/Typography';
import theme from '../../assets/theme/Theme';
import Menus from './Menus';

const ReceiptPaper = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  width: 162px;
  height: 216px;
  border: 4px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  ${(props) => props.theme.shadow.receiptShadow}
`;

const Photo = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 100%;
`;

const Line = styled.div`
  width: 135px;
  height: 1px;
  background-color: ${(props) => props.theme.colors.receiptLine};
  margin: 12px 0;
`;

const StoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 17px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Up = styled.div``;
const Down = styled.div``;

const Receipt = ({ data }) => {
  const { brand_name, receipt_img_url, product_name, ea, date, total_cost } = data;

  return (
    <ReceiptPaper>
      <Up>
        <StoreWrapper>
          <Photo src={`${process.env.REACT_APP_API}${receipt_img_url}`} />
          <SlOptions color={theme.colors.gray} size='11px' />
        </StoreWrapper>
        <Typography receiptTitle>{brand_name}</Typography>
        <Line />
        <Menus menus={product_name} ea={ea} />
      </Up>
      <Down>
        <Total>
          <Typography receiptVerySmall>{date}</Typography>
          <Typography receiptTotal>{total_cost}원</Typography>
        </Total>
      </Down>
    </ReceiptPaper>
  );
};

export default Receipt;
