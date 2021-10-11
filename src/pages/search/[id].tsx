// 매장 상세페이지 관련
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '@components/Header';
import StoreDescription from '@components/StoreDescription';
import { StoreDisplayProps } from '@components/StoreDisplay';
import { dummys } from '@temp/SearchListDummy';

export interface DetailPageProps extends StoreDisplayProps {
  desc: string;
  tel: string;
  price: string;
  time: string;
}

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [임시, 셋임시] = useState<DetailPageProps>();

  useEffect(() => {
    function fetchSelectedData(id: string) {
      return dummys.filter((dummy) => dummy.id === +id)[0];
    }

    const temp = fetchSelectedData(id as string);
    셋임시(temp);
  }, [id]);

  if (!임시) {
    return 'loading...';
  }

  return (
    <DetailPage>
      <Header />
      <ImageWrapper>
        <Image src={임시.image} alt="가게 이미지" layout="fill" />
      </ImageWrapper>
      <StoreDescription store={임시} />
    </DetailPage>
  );
};

export default Detail;

const DetailPage = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;

  header {
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    z-index: 100;

    svg path {
      fill: #fff;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  min-height: 190px;
  height: 224px;
  width: 100%;
`;
