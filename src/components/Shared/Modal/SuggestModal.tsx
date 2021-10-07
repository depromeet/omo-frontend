import { useState } from 'react';

import CloseIcon from '@assets/close.svg';
import ErrorIcon from '@assets/error_outline.svg';
import Button from '@components/Shared/Button';
import { HashTag } from '@components/StoreDescription/styles';

import * as S from './styles';

interface SuggestModalProps {
  toggleModal: (isOpen: boolean) => void;
}

const SuggestModal = ({ toggleModal }: SuggestModalProps) => {
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [hashtag, setHashtag] = useState('');

  const handleClickOnHashTag = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (!(e.target instanceof HTMLSpanElement)) return;

    const content = e.target.textContent as string;
    setHashtag(content);
  };

  const handleChangeOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    selectInputByName(target);
  };

  const selectInputByName = (target: EventTarget & HTMLInputElement) => {
    switch (target.name) {
      case 'location':
        setLocation(target.value);
        break;
      case 'name':
        setName(target.value);
        break;
      default:
        break;
    }
  };

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
            <input
              name="location"
              type="text"
              placeholder="예시) 강서"
              value={location}
              onChange={(e) => handleChangeOnInput(e)}
            />
          </S.InputWrapper>

          <S.GradeWrapper>
            <div className="sub-title">등급</div>
            <div className="hashtag-wrapper">
              <HashTag
                className={hashtag === '#캐쥬얼' ? 'active' : ''}
                onClick={(e) => handleClickOnHashTag(e)}
              >
                #캐쥬얼
              </HashTag>
              <HashTag
                className={hashtag === '#하이엔드' ? 'active' : ''}
                onClick={(e) => handleClickOnHashTag(e)}
              >
                #하이엔드
              </HashTag>
              <HashTag
                className={hashtag === '#미들급' ? 'active' : ''}
                onClick={(e) => handleClickOnHashTag(e)}
              >
                #미들급
              </HashTag>
            </div>
          </S.GradeWrapper>

          <S.InputWrapper>
            <label className="sub-title">이름</label>
            <input
              name="name"
              type="text"
              placeholder="예시) 나오키"
              value={name}
              onChange={(e) => handleChangeOnInput(e)}
            />
          </S.InputWrapper>

          <div className="warning-message">
            <ErrorIcon />
            유효하지 않은 가게는 반려될 수 있어요!
          </div>

          <Button
            clickListener={() => {
              alert('제보완료');
              toggleModal(false);
            }}
            text="완료"
            bgColor="#293AD2"
            color="#fff"
            disabled={!location || !name || !hashtag}
          />
        </S.SuggestModal>
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default SuggestModal;
