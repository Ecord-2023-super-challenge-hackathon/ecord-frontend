import styled from 'styled-components';
import Receipt from './Receipt';

const ReceiptContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 15px;
  padding: 20px;
`;

const Receipts = ({ receipts }) => (
  <ReceiptContainer>
    {receipts.map((data) => {
      return <Receipt data={data} key={data.receipt_index} />;
    })}
  </ReceiptContainer>
);

export default Receipts;
