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
          <div className="guide-message-wrapper">
            <p className="guide-message">원하는 오마카세를 찾지 못하셨나요?</p>
            <p className="guide-message">직접 제보해주시면 확인 후 오모에 추가해둘게요!</p>
          </div>

          <S.LocationWrapper>
            <div className="sub-title">지역</div>
            <div className="hashtag-wrapper">
              <HashTag>#강남구</HashTag>
              <HashTag>#강동구</HashTag>
              <HashTag>#어쩌구</HashTag>
              <HashTag>#모르겠어요</HashTag>
            </div>
          </S.LocationWrapper>

          <S.InputWrapper>
            <label className="sub-title">오마카세이름</label>
            <input type="text" />
          </S.InputWrapper>

          <Button
            clickListener={() => {
              alert('제보완료');
              toggleModal(false);
            }}
            text="제보완료"
            bgColor="#c9c9c9"
          />
        </S.SuggestModal>
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default SuggestModal;
