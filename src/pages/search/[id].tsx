// 매장 상세페이지 관련
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import FavoriteIcon from '@assets/favorite.svg';
import Header from '@components/Header';
import Button from '@components/Shared/Button';
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

      <ButtonWrapper>
        <LikeButton onClick={() => alert('좋아요!')}>
          <FavoriteIcon />
          <span className="count">125</span>
        </LikeButton>
        <Button
          clickListener={() => router.push('/certification')}
          color="#fff"
          bgColor="#293AD2"
          text="이 가게 도장깨기"
        />
      </ButtonWrapper>
    </DetailPage>
  );
};

export default Detail;

const DetailPage = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  header {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
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

const ButtonWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  bottom: 20px;
  width: 100%;
  padding: 0 20px;
  padding-top: 10px;
  box-sizing: border-box;
  display: flex;
`;

const LikeButton = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  margin-right: 8px;
  box-sizing: content-box;
  background-color: ${({ theme }) => theme.colors.black100};
  width: 54px;
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .count {
    color: ${({ theme }) => theme.colors.pointRed};
    ${({ theme }) => theme.fonts.contents3};
  }
`;
