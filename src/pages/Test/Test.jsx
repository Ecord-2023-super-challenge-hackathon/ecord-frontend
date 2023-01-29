import React, { useEffect, useState } from 'react';
import Layout from '../../component/Layout/Layout';
import axios from 'axios';
import Stickers from '../../component/Stickers/Stickers';
import styled from 'styled-components';
import { motion, useDragControls } from 'framer-motion';

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

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/sticker/load`).then((r) => {
      console.log(r.data);
      setStickerList(r.data);
      setStickerOnList(new Array(r.data.length).fill(false));
    });
  }, []);

  return (
    <>
      <Layout>
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
                onDrag={(event, info) => console.log(info.offset.x, info.offset.y)}
                dragControls={controls}
                whileTap={{ cursor: 'grabbing' }}
                key={i}
                src={`${process.env.REACT_APP_API}${stickerList[i].sticker_url}`}
              />
            ),
        )}
      </Layout>
    </>
  );
};

export default Test;
