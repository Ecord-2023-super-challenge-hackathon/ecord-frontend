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
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Deco } from './DecoButton.svg';
import { ReactComponent as ImageIcon } from './ImageIcon.svg';
import photo from './lee.jpeg';
import heart from './heart.png';
import Margin from '../../component/Margin/Margin';
import Flex from '../../component/Flex/Flex';

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
  border-radius: 5px;
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
  padding-top: 3px;
  padding-left: 3px;
  cursor: pointer;
  box-shadow: 4px 4px 8px rgba(77, 140, 141, 0.5);
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
  console.log(receiptIndex);
  const [receiptDetail, setReceiptDetail] = useState([]);

  let receiptLength;

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
        receiptLength = r.data.length;
      });
  }, []);

  // const postImage = () => {
  //   const user_index = localStorage.getItem('user_index');

  //   axios
  //     .post(
  //       `${process.env.REACT_APP_API}/users/${user_index}/receipt/${receiptIndex}/image`,
  //       {
  //         content: temp,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         },
  //       },
  //     )
  //     .then((r) => console.log(r));
  // };

  const navigate = useNavigate();
  const [isImage, setIsImage] = useState(false);

  const navigateToBefore = () => {
    navigate('/main');
  };

  console.log('이건' + isImage);

  return (
    <>
      <motion.div
        initial={{ x: 50, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -50, y: 0, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.7 }}
      >
        <Layout color='#f1f1f1'>
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
                  <ImgSection onClick={() => setIsImage(true)}>
                    {isImage ? (
                      receiptIndex === '106' ? (
                        <Img
                          className='receiptImg'
                          alt='receiptImg'
                          style={{ height: '124px', borderRadius: '10px' }}
                          src={heart}
                        />
                      ) : (
                        <Img
                          className='receiptImg'
                          alt='receiptImg'
                          style={{ height: '125px', borderRadius: '10px' }}
                          src={photo}
                        />
                      )
                    ) : (
                      <Flex flexCenter column>
                        <ImageIcon />
                        <Margin height='5' />
                        <Typography calendarTitle color='SpecialGreen'>
                          사진을 넣어 영수증을 꾸며보세요!
                        </Typography>
                      </Flex>
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
                <Deco />
              </DecoButton>
            </AllWrapper>
          </div>
        </Layout>
      </motion.div>
    </>
  );
};

export default ReceiptDetail;
