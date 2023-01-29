import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import FooterNavigate from '../../component/FooterNavigate';
import Receipts from '../../component/Receipt/Receipts';
import Typography from '../../component/Typography/Typography';
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
const { kakao } = window;
const DaySelectWrapper = styled.div`
  width: 100%;
  height: 45px;
  background-color: #05be70;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReceiptWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const MapLog = () => {
  useEffect(() => {
    const id = localStorage.getItem('user_index');

    axios
      .get(`${process.env.REACT_APP_API}/users/${id}/receipts/1`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((r) => {
        const address = r.data.address;

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

        geocoder.addressSearch(address, function (result, status) {
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
      });
  }, []);

  return (
    <>
      <Layout>
        <DaySelectWrapper>
          <Typography contentText color='backgroundWhite'>
            2022.01.12(화) 확인하기
          </Typography>
          <IoIosArrowDown size={25} style={{ position: 'absolute', right: '70px', color: 'white' }} />
        </DaySelectWrapper>

        <FooterNavigate />
      </Layout>
    </>
  );
};

export default MapLog;
