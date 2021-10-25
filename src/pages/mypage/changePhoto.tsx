import styled from 'styled-components';

import ModalLayout from '@components/Layout/ModalLayout';

const ChangePhoto = () => {
  const onClick = () => alert('프로필사진 변경이 완료되었습니다.');

  return (
    <ModalLayout title="프로필사진 변경" buttonContent="확인" clickHandler={onClick}>
      <ChangePhotoPage>
        <PhotoContainer>
          <div className="photo-wrapper"></div>
          <div className="photo-wrapper"></div>
          <div className="photo-wrapper"></div>
          <div className="photo-wrapper"></div>
          <div className="photo-wrapper"></div>
          <div className="photo-wrapper"></div>
          <div className="photo-wrapper"></div>
          <div className="photo-wrapper"></div>
        </PhotoContainer>
        <ChangeButton>내 사진으로 할래요</ChangeButton>
      </ChangePhotoPage>
    </ModalLayout>
  );
};

export default ChangePhoto;

const ChangePhotoPage = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  margin-bottom: 1rem;

  .photo-wrapper {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #c4c4c4;
  }
`;
const ChangeButton = styled.button`
  padding: 15px;
  background-color: #e1e1e1;
  outline: none;
  border: none;
  border-radius: 8px;
  color: #4b4b4b;
  font-size: 16px;
`;
