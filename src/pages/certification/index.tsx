import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { SearchBottomActionSheet as StyledSearchBottomActionSheet } from '@/components/Certification/styles';
import {
  LocationChecker,
  ReceiptChecker,
  SearchBottomActionSheet,
} from '@components/Certification';
import Header from '@components/Header';
import Button from '@components/Shared/Button';
import { CertificationModal } from '@components/Shared/Modal';

const Certification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActionSheetActive, setIsActionSheetActive] = useState(false);
  const {
    query: { blobUrl, image, location, name },
  } = useRouter();

  const handleClickOnReselectLocation = () => {
    setIsActionSheetActive((prev) => !prev);
  };

  useEffect(() => {
    return () => URL.revokeObjectURL(blobUrl as string);
  }, [blobUrl]);

  return (
    <CertificationPage isActionSheetActive={isActionSheetActive}>
      <Header title="인증확인" />
      <CertificationMain className="container">
        <LocationChecker
          image={image as string}
          location={location as string}
          name={name as string}
          handleClickOnReselectLocation={handleClickOnReselectLocation}
        />

        <ReceiptChecker blobUrl={blobUrl as string} />

        <Button
          clickListener={() => setIsModalOpen(true)}
          color="#fff"
          bgColor="#293AD2"
          text="도장깨기 접수하기"
        />
      </CertificationMain>

      {isModalOpen && <CertificationModal name={name as string} />}
      <SearchBottomActionSheet handleClickOnReselectLocation={handleClickOnReselectLocation} />
    </CertificationPage>
  );
};

export default Certification;

const CertificationPage = styled.section<{ isActionSheetActive: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${({ isActionSheetActive }) =>
    isActionSheetActive &&
    css`
      ${StyledSearchBottomActionSheet} {
        transform: translateY(0);
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 10;
      }
    `}
`;

const CertificationMain = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
