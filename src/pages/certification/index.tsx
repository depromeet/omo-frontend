import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header';

const Certification = () => {
  const {
    query: { blobUrl },
  } = useRouter();

  return (
    <CertificationPage>
      <Header title="인증확인" />
      <CertificationMain className="container">
        <ImageWrapper>
          <Image src={blobUrl as string} alt="영수증 미리보기" layout="fill" />
        </ImageWrapper>
      </CertificationMain>
    </CertificationPage>
  );
};

export default Certification;

const CertificationPage = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const CertificationMain = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 335px;
  height: 335px;
  border-radius: 10px;
  overflow: hidden;
`;
