import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import FooterNavigate from '../../component/FooterNavigate';
import Receipts from '../../component/Receipt/Receipts';
import Typography from '../../component/Typography/Typography';
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import leaf from './leaf.png';

const { kakao } = window;

const AllWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const AllLayout = styled.div`
  width: 360px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: '#FFFFFF';
  display: flex;
  flex-wrap: wrap;
`;

const DaySelectWrapper = styled.div`
  width: 100%;
  height: 45px;
  background-color: #05be70;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const MapMemoWrapper = styled.div`
  width: 87%;
  height: 44px;
  background-color: #eef0f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 13px;
  border-radius: 10px;
  margin-top: 16px;
`;

const MapMemo = styled.input`
  width: 308px;
  height: 44px;
  background-color: #eef0f3;
  border: none;
`;

const ReceiptWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 35px;
`;

const MapLog = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3,
    };
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다..

    axios.get('');

    geocoder.addressSearch('인천 연수구 청학로6번길 8', function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;color:red;text-align:center;padding:6px 0;">가메이 쒸펄</div>',
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, []);

  useEffect(() => {
    const user_index = localStorage.getItem('user_index');
    console.log(process.env.REACT_APP_API);
    axios
      .get(`${process.env.REACT_APP_API}/users/${user_index}/receipts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((r) => {
        setReceipts(r.data);
      });
  }, []);

  return (
    <>
      <AllWrapper>
        <AllLayout>
          <DaySelectWrapper>
            <Typography contentText color='backgroundWhite'>
              2022.01.12(화) 확인하기
            </Typography>
            <IoIosArrowDown size={25} style={{ position: 'absolute', right: '70px', color: 'white' }} />
          </DaySelectWrapper>
          <MapWrapper>
            {' '}
            <div
              id='myMap'
              style={{
                width: '312px',
                height: '212px',
                borderRadius: '10px',
              }}
            ></div>
            <MapMemoWrapper>
              <img src={leaf} style={{ width: '16px', height: '16px', marginRight: '5px' }} />
              <MapMemo placeholder='나의 푸른 기록을 짧게 남겨보세요.' />
            </MapMemoWrapper>
          </MapWrapper>
          <ReceiptWrapper>
            <Typography SmallTitleText style={{ marginLeft: '24px' }}>
              발급한 전자 영수증
            </Typography>
          </ReceiptWrapper>
          <Receipts receipts={receipts} />
          <FooterNavigate />
        </AllLayout>
      </AllWrapper>
    </>
  );
};

export default MapLog;
