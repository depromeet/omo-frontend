import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';

import { LocationChecker, ReceiptChecker } from '@components/Certification';
import Header from '@components/Header';
import Button from '@components/Shared/Button';
import { CertificationModal } from '@components/Shared/Modal';

const Certification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    query: { blobUrl, image, location, name },
  } = useRouter();

  return (
    <CertificationPage>
      <Header title="인증확인" />
      <CertificationMain className="container">
        <LocationChecker
          image={image as string}
          location={location as string}
          name={name as string}
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
