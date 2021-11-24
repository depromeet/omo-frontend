import CloseIcon from '@assets/close.svg';
import ErrorIcon from '@assets/error_outline.svg';

import * as S from './styles';

interface GradeDescriptionModalProps {
  toggleModal: (isOpen: boolean) => void;
}

const GradeDescriptionModal = ({ toggleModal }: GradeDescriptionModalProps) => {
  return (
    <S.ModalWrapper>
      <S.ModalBox>
        <S.ModalInner>
          <S.ModalTitle horizontalAlign="flex-start">
            <span className="sub-title1">오모는 이렇게 구분했어요.</span>
            <CloseIcon className="close-btn" onClick={toggleModal} />
          </S.ModalTitle>

          <S.GradeDescriptionWrapper>
            <S.GradeDescription>
              <span className="grade">하이엔드</span>
              <span className="price">120,000원</span>
            </S.GradeDescription>
            <S.GradeDescription>
              <span className="grade">미들</span>
              <span className="price">50,000원 ~ 119,000원</span>
            </S.GradeDescription>
            <S.GradeDescription>
              <span className="grade">엔트리</span>
              <span className="price">~49,000원</span>
            </S.GradeDescription>
          </S.GradeDescriptionWrapper>

          <div className="warning-message">
            <ErrorIcon />
            저녁식사 가격 기준
          </div>
        </S.ModalInner>
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default GradeDescriptionModal;
