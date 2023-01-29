import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import theme from '../../assets/theme/Theme';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
const Dimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  backdrop-filter: blur(3px);
  padding: 53px 27px;

  background: rgba(42, 42, 44, 0.76);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StickersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 299px;

  // 모달 스크롤, 높이값을 주고 스크롤되게 하면 된다.
  height: 2000px;
  overflow-y: auto;
`;

const Sticker = styled.img`
  cursor: pointer;
`;

const Stickers = ({ onSticker, setOnSticker, stickerList, setStickerOnList, stickerOnList }) => {
  const backStyle = {
    cursor: 'pointer',
    marginRight: '290px',
    marginBottom: '30px',
  };

  const imgStyle = {
    width: '66px',
    height: '66px',
    objectFit: 'cover',
    margin: '15px 13px',
  };

  const stickerHandler = (e) => {
    const { id } = e.target;

    console.log(e.target);
    const copy = [...stickerOnList];
    copy[id] = !stickerOnList[id];
    setStickerOnList(copy);
    setOnSticker(!onSticker);
  };

  return (
    <>
      {onSticker && (
        <Dimmer>
          <FiArrowLeft
            style={backStyle}
            size='100px'
            color={theme.colors.white}
            onClick={() => setOnSticker(!onSticker)}
          />
          <StickersContainer>
            {stickerList.map(({ sticker_url }, i) => (
              <>
                {stickerOnList[i] || (
                  <Sticker
                    id={i}
                    onClick={stickerHandler}
                    src={`${process.env.REACT_APP_API}${sticker_url}`}
                    style={imgStyle}
                  />
                )}
              </>
            ))}
          </StickersContainer>
        </Dimmer>
      )}
    </>
  );
};

export default Stickers;
