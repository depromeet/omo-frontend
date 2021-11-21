import React, { useState } from 'react';
import styled from 'styled-components';

import CloseIcon from '@assets/close.svg';
// 랭킹 상세 페이지
import BottomActionSheet from '@components/BottomActionSheet';
import { SearchBottomActionSheet } from '@components/Certification';
import VisitedStore from '@components/VisitedStore';
import { useFetchUserValue } from '@recoil/userState';
import { dummys } from '@temp/VisitedStoreDummy';

const RankerDetail = () => {
  const { contents: userValue } = useFetchUserValue();

  return (
    <>
      <TitleWrapper>
        <Title>{userValue.nickname}</Title>
        <CloseIcon />
      </TitleWrapper>
      <StoreListLayout>
        {dummys.map((user) => (
          <VisitedStore
            key={user.id}
            id={user.id}
            name={user.name}
            photo_url={user.photo_url}
            county={user.county}
            create_date={user.create_date}
            is_certificated={user.is_certificated}
          />
        ))}
        {/* {userValue.map((user) => (
            <VisitedStore
              key={user.id}
              id={user.id}
              name={user.name}
              photo_url={user.photo_url}
              county={user.county}
              create_date={user.create_date}
              is_certificated={user.is_certificated}
            />
          ))} */}
      </StoreListLayout>
    </>
  );
};

export default RankerDetail;

const StoreListLayout = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.header3_5};

  strong {
    font-weight: bold;
  }
`;
