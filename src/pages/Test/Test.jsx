import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../component/Layout/Layout';
import axios from 'axios';
import Stickers from '../../component/Stickers/Stickers';
import styled from 'styled-components';
import { motion, useDragControls } from 'framer-motion';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';

const Sticker = styled(motion.img)`
  cursor: pointer;
  width: 66px;
  height: 66px;
  object-fit: cover;
  margin: 15px 13px;
  position: absolute;
`;

const Test = () => {
  const [stickerList, setStickerList] = useState([]);
  const [stickerOnList, setStickerOnList] = useState([]);
  const [onSticker, setOnSticker] = useState(false);
  const controls = useDragControls();
  const cardRef = useRef();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/sticker/load`).then((r) => {
      console.log(r.data);
      setStickerList(r.data);
      setStickerOnList(new Array(r.data.length).fill(false));
    });
  }, []);

  const onDownloadBtn = () => {
    const card = cardRef.current;
    const filter = (card) => {
      return card.tagName !== 'BUTTON';
    };
    domToImage.toBlob(card, { filter: filter }).then((blob) => {
      saveAs(blob, 'card.png');
    });
  };

  return (
    <>
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
                  // onDrag={(event, info) => console.log(info.offset.x, info.offset.y)}
                  dragControls={controls}
                  whileTap={{ cursor: 'grabbing' }}
                  key={i}
                  src={`${process.env.REACT_APP_API}${stickerList[i].sticker_url}`}
                />
              ),
          )}
          <button className='downBtn' onClick={onDownloadBtn}>
            이미지 다운로드
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Test;

// dom to image에서 스티커 캡쳐를 하려면 자식(스티커)는 absolute니까 부모에게 relative를 줘야한다.
