import CloseIcon from '@assets/close.svg';
import Button from '@components/Shared/Button';
import { HashTag } from '@components/StoreDescription/styles';

import * as S from './styles';

interface SuggestModalProps {
  toggleModal: (isOpen: boolean) => void;
}

const SuggestModal = ({ toggleModal }: SuggestModalProps) => {
  return (
    <S.ModalWrapper>
      <S.ModalBox>
        <S.SuggestModal>
          <S.ModalTitle>
            <span className="sub-title">제보하기</span>
            <CloseIcon className="close-btn" onClick={toggleModal} />
          </S.ModalTitle>

          <div className="guide-message-wrapper small-text">
            <p className="guide-message">원하는 오마카세를 찾지 못하셨나요?</p>
            <p className="guide-message">제보해주시면 오모에 추가해둘게요!</p>
          </div>

          <S.InputWrapper>
            <label className="sub-title">지역</label>
            <input type="text" placeholder="예시) 강서" />
          </S.InputWrapper>

          <S.GradeWrapper>
            <div className="sub-title">등급</div>
            <div className="hashtag-wrapper">
              <HashTag>#캐쥬얼</HashTag>
              <HashTag>#하이엔드</HashTag>
              <HashTag>#미들급</HashTag>
            </div>
          </S.GradeWrapper>

          <S.InputWrapper>
            <label className="sub-title">이름</label>
            <input type="text" placeholder="예시) 나오키" />
          </S.InputWrapper>

          <div className="warning-message">유효하지 않은 가게는 반려될 수 있어요!</div>

          <Button
            clickListener={() => {
              alert('제보완료');
              toggleModal(false);
            }}
            text="완료"
            bgColor="#293AD2"
            color="#fff"
          />
        </S.SuggestModal>
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default SuggestModal;
