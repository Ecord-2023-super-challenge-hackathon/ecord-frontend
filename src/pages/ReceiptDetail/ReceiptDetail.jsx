import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import ReceiptInfo from './Component/ReceiptInfo';
import Typography from '../../component/Typography/Typography';
import { FiArrowLeft, FiDownload } from 'react-icons/fi';
import VatInfo from './Component/VatInfo';
import CardInfo from './Component/CardInfo';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const AllWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  vertical-align: top;
  flex-wrap: wrap;
`;

const TitleWrapper = styled.div`
  width: 385px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ReceiptPaper = styled.div`
  width: 284px;
  height: 568px;
  background-color: #ffffff;
  filter: drop-shadow(2px 2px 16px rgba(0, 0, 0, 0.11));
  border-radius: 5px;
`;

const ImgSection = styled.div`
  width: 236px;
  height: 124px;
  margin-top: 24px;
  background-color: #e0efef;
  border: 1.4px dashed #327676;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const AlignWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Img = styled.img``;

const ReceiptDetail = () => {
  const { receiptIndex } = useParams();
  const [receiptDetail, setReceiptDetail] = useState([]);

  useEffect(() => {
    const user_index = localStorage.getItem('user_index');
    axios
      .get(`${process.env.REACT_APP_API}/users/${user_index}/receipts/${receiptIndex}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((r) => {
        console.log(r.data);
        setReceiptDetail(r.data);
      });
  }, []);

  return (
    <>
      <AllWrapper>
        <TitleWrapper>
          <FiArrowLeft size={22} />
          <Typography SmallTitleText>영수증 상세보기</Typography>
          <FiDownload size={20} />
        </TitleWrapper>
        <ReceiptPaper>
          <ImgWrapper>
            <ImgSection>
              <Img className='receiptImg' alt='receiptImg' src={receiptDetail.content_img_url} />
            </ImgSection>
          </ImgWrapper>

          <AlignWrapper>
            <ReceiptInfo
              address={receiptDetail.address}
              storeName={receiptDetail.brand_name}
              MenuList={receiptDetail.product_name}
              costList={receiptDetail.cost}
            />
            <VatInfo
              taxablePrice={receiptDetail.serial_number}
              vat={receiptDetail.receipt_index}
              totalVat={receiptDetail.total_cost}
            />
            <CardInfo
              cardName={receiptDetail.card_company}
              cardNumber={receiptDetail.card_number}
              payMent='일시불'
              payPrice={receiptDetail.total_cost}
            />
          </AlignWrapper>
        </ReceiptPaper>
      </AllWrapper>
    </>
  );
};

export default ReceiptDetail;
