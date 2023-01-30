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
import emptyImg from './EmptyImg.png';
import temp from './image 204.png';
import { useNavigate } from 'react-router-dom';
import Deco from './DecoButton.png';

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
  cursor: pointer;
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

const DecoButton = styled.button`
  width: 58px;
  height: 58px;
  background-color: #328e8e;
  border-radius: 100%;
  position: absolute;
  left: 255px;
  top: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const ButtonImg = styled.img`
  width: 34px;
  height: 34px;
  margin-top: 3px;
  margin-left: 3px;
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
      saveAs(blob, '영수증.png');
    });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/sticker/load`).then((r) => {
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

  const postImage = () => {
    const user_index = localStorage.getItem('user_index');

    axios
      .post(
        `${process.env.REACT_APP_API}/users/${user_index}/receipt/${receiptIndex}/image`,
        {
          content: temp,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
      .then((r) => console.log(r));
  };

  const navigate = useNavigate();

  const navigateToBefore = () => {
    navigate('/main');
  };

  return (
    <Layout gray>
      <TitleWrapper>
        <FiArrowLeft style={{ cursor: 'pointer' }} size={22} onClick={navigateToBefore} />
        <Typography SmallTitleText>영수증 상세보기</Typography>
        <FiDownload style={{ cursor: 'pointer' }} size={20} className='downBtn' onClick={onDownloadBtn} />
      </TitleWrapper>
      <div className='card' ref={cardRef} style={{ position: 'relative' }}>
        <Stickers
          onSticker={onSticker}
          setOnSticker={setOnSticker}
          stickerList={stickerList}
          setStickerOnList={setStickerOnList}
          stickerOnList={stickerOnList}
        />

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
          <ReceiptPaper>
            <ImgWrapper>
              <ImgSection onClick={postImage}>
                {receiptDetail.content_img_url ? (
                  <Img
                    className='receiptImg'
                    alt='receiptImg'
                    style={{ height: '20px' }}
                    src={`${process.env.REACT_APP_API}${receiptDetail.content_img_url}`}
                  />
                ) : (
                  <Img style={{ width: '158px' }} className='receiptImg' alt='receiptImg' src={emptyImg} />
                )}
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
          <DecoButton type='button' onClick={() => setOnSticker(!onSticker)}>
            <ButtonImg src={Deco} />
          </DecoButton>
        </AllWrapper>
      </div>
    </Layout>
  );
};

export default ReceiptDetail;
