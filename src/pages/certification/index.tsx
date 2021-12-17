import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilValueLoadable, useResetRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

import { SearchBottomActionSheet as StyledSearchBottomActionSheet } from '@/components/Certification/styles';
import {
  LocationChecker,
  ReceiptChecker,
  SearchBottomActionSheet,
} from '@components/Certification';
import Header from '@components/Header';
import Button from '@components/Shared/Button';
import { PageLoading } from '@components/Shared/Loading';
import { CertificationModal } from '@components/Shared/Modal';
import { selectedReceipt } from '@recoil/certificationState';
import { Omakase, currentOmakaseQuery, currentOmakaseState } from '@recoil/omakaseState';
import { requestStamp } from '@request';
import { DEFAULT_IMAGE_LIST_URL } from '@constants/omakase';

const Certification = () => {
  const { push, query } = useRouter();
  const { id } = query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActionSheetActive, setIsActionSheetActive] = useState(false);
  const receipt = useRecoilValue(selectedReceipt);
  const [blobUrl, setBlobUrl] = useState('/images/receipt.png');
  const { state, contents } = useRecoilValueLoadable(currentOmakaseState(Number(id)));
  const refresh = useResetRecoilState(currentOmakaseQuery(Number(id)));

  const handleClickOnReselectLocation = () => {
    setIsActionSheetActive((prev) => !prev);
  };

  const handleGoBack = () => {
    push(`/search/${id}`);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const transformedBlobUrl = URL.createObjectURL(receipt!);
    setBlobUrl(transformedBlobUrl);
    return () => URL.revokeObjectURL(transformedBlobUrl);
  }, [receipt]);

  useEffect(() => {
    return () => refresh();
  }, [refresh]);

  if (state === 'loading') return <PageLoading />;

  const omakase = contents as Omakase;

  const handleSubmitReceipt = () => {
    const formData = new FormData();
    formData.append('omakaseId', String(id));
    formData.append('receiptIssuanceDate', dayjs().format('YYYY-MM-DD'));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    formData.append('receiptImage', receipt!);

    requestStamp(formData);
    setIsModalOpen(true);
  };

  return (
    <CertificationPage isActionSheetActive={isActionSheetActive}>
      <Header title="인증확인" backHandler={handleGoBack} />
      <CertificationMain className="container">
        <LocationChecker
          image={
            omakase.image_url
              ? `${process.env.API_ENDPOINT}${omakase.image_url}`
              : DEFAULT_IMAGE_LIST_URL
          }
          address={omakase.address}
          name={omakase.name}
          handleClickOnReselectLocation={handleClickOnReselectLocation}
        />

        <ReceiptChecker blobUrl={blobUrl as string} />

        <Button
          clickListener={handleSubmitReceipt}
          color="#fff"
          bgColor="#293AD2"
          text="도장깨기 접수하기"
        />
      </CertificationMain>

      {isModalOpen && <CertificationModal name={omakase.name} />}
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
  overflow: hidden;
  ${StyledSearchBottomActionSheet} {
    transform: translateY(100%);
  }

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
