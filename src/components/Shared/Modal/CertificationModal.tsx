import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@components/Shared/Button';

import * as S from './styles';

type CertificationModalProps = {
  name: string;
};

const CertificationModal = ({ name }: CertificationModalProps) => {
  const { push } = useRouter();
  return (
    <S.ModalWrapper>
      <S.ModalBox>
        <S.ModalInner>
          <S.CertificationModal>
            <Image
              src="/images/omo_logo.png"
              alt="오모 로고"
              width={104}
              height={24}
              layout="fixed"
            />

            <div className="store-message">
              <p>&apos;{name}&apos; 의 도장깨기가</p>
              <p>성공적으로 접수되었어요!</p>
            </div>

            <div className="guide-message">
              <p>정확한 인증을 위해</p>
              <p>짧게는 2시간부터 길게는 3일의 시간이</p>
              <p>소요되니 조금만 양해부탁드려요.</p>
            </div>

            <Button
              clickListener={() => push('/mypage')}
              color="#fff"
              bgColor="#293AD2"
              text="네 확인했어요!"
            />
          </S.CertificationModal>
        </S.ModalInner>
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default CertificationModal;
