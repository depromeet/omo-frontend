// 닉네임 변경 페이지
import styled from 'styled-components';

import ModalLayout from '@components/Layout/ModalLayout';

const changeNickName = () => {
  return <ModalLayout title="닉네임변경" buttonContent="확인">닉네임변경</ModalLayout>;
};

export default changeNickName;
