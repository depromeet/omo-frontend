// 매장 상세페이지 관련
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import StoreDescription from '@components/StoreDescription';
import { StoreDisplayProps } from '@components/StoreDisplay';
import { dummys } from '@temp/SearchListDummy';

export interface DetailPageProps extends StoreDisplayProps {
  location: string;
  tel: string;
  price: string;
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
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 240px;
  width: 100%;
`;
