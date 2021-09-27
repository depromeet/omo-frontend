// 사진 수정 페이지
import styled from 'styled-components';

import ModalLayout from '@components/Layout/ModalLayout';

const changePhoto = () => {
  return (
    <ModalLayout title="프로필사진 변경" buttonContent="확인">
      프로필사진 변경
    </ModalLayout>
  );
};

export default changePhoto;
