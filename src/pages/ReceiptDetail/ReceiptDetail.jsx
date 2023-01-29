import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import ReceiptInfo from './Component/ReceiptInfo';
import Typography from '../../component/Typography/Typography';
import { FiArrowLeft, FiDownload } from 'react-icons/fi';
import VatInfo from './Component/VatInfo';
import CardInfo from './Component/CardInfo';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion, useDragControls } from 'framer-motion';
import { saveAs } from 'file-saver';
import domToImage from 'dom-to-image';
import Stickers from '../../component/Stickers/Stickers';

const Sticker = styled(motion.img)`
  cursor: pointer;
  width: 66px;
  height: 66px;
  object-fit: cover;
  margin: 15px 13px;
  position: absolute;
  z-index: 10;
`;

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
  // 여기서부터 스티커

  const [stickerList, setStickerList] = useState([]);
  const [stickerOnList, setStickerOnList] = useState([]);
  const [onSticker, setOnSticker] = useState(false);
  const controls = useDragControls();
  const cardRef = useRef();

  const onDownloadBtn = () => {
    const card = cardRef.current;
    const filter = (card) => {
      return card.tagName !== 'BUTTON';
    };
    domToImage.toBlob(card, { filter: filter }).then((blob) => {
      saveAs(blob, 'card.png');
    });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/sticker/load`).then((r) => {
      console.log(r.data);
      setStickerList(r.data);
      setStickerOnList(new Array(r.data.length).fill(false));
    });
  }, []);

  // 여기까지 스티커
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
    <Layout>
      <div className='card' ref={cardRef} style={{ position: 'relative' }}>
        <Stickers
          onSticker={onSticker}
          setOnSticker={setOnSticker}
          stickerList={stickerList}
          setStickerOnList={setStickerOnList}
          stickerOnList={stickerOnList}
        />
        <button type='button' onClick={() => setOnSticker(!onSticker)}>
          스티커 키자
        </button>
        {stickerOnList.map(
          (a, i) =>
            a && (
              <Sticker
                dragMomentum={false}
                dragElastic={0.1}
                whileDrag={{ scale: 1.2 }}
                drag
                dragControls={controls}
                whileTap={{ cursor: 'grabbing' }}
                key={i}
                src={`${process.env.REACT_APP_API}${stickerList[i].sticker_url}`}
              />
            ),
        )}

        <AllWrapper>
          <TitleWrapper>
            <FiArrowLeft size={22} />
            <Typography SmallTitleText>영수증 상세보기</Typography>
            <FiDownload size={20} className='downBtn' onClick={onDownloadBtn} />
          </TitleWrapper>
          <ReceiptPaper>
            <ImgWrapper>
              <ImgSection>
                <Img
                  className='receiptImg'
                  alt='receiptImg'
                  style={{ height: '20px' }}
                  src='http://43.207.42.44:4000/images/99857F4F5E738F472F.png'
                />
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
      </div>
    </Layout>
  );
};

export default ReceiptDetail;
