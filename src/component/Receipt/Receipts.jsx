import { Navigate, useNavigate } from 'react-router-dom';
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

const Receipts = ({ receipts }) => {
  const navigate = useNavigate();

  const moveToReceipt = (e) => {
    const { id } = e.currentTarget;

    navigate(`/receipt/${id}`);
  };

  return (
    <ReceiptContainer>
      {receipts.map((data) => (
        <Receipt onClick={moveToReceipt} id={data.receipt_index} data={data} key={data.receipt_index} />
      ))}
    </ReceiptContainer>
  );
};

export default Receipts;
