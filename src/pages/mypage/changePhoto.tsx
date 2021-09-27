// 사진 수정 페이지
import styled from 'styled-components';

import ModalLayout from '@components/Layout/ModalLayout';

const changePhoto = () => {
  const onClick = () => alert('프로필사진 변경이 완료되었습니다.');

  return (
    <ModalLayout title="프로필사진 변경" buttonContent="확인" clickHandler={onClick}>
      프로필사진 변경
    </ModalLayout>
  );
};

export default changePhoto;
