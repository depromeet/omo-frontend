// 회원탈퇴 페이지
import styled from 'styled-components';

import ModalLayout from '@components/Layout/ModalLayout';

const signout = () => {
  const onClick = () => alert('탈퇴가 완료되었습니다.');

  return (
    <ModalLayout title="회원탈퇴" buttonContent="탈퇴하기" clickHandler={onClick}>
      <SignOutPage>
        탈퇴시 도장 깬 내역을 포함한 <br />
        모든 정보가 초기화됩니다.
      </SignOutPage>
    </ModalLayout>
  );
};

export default signout;

const SignOutPage = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  font-size: 23px;
  padding: 1rem;
  line-height: 140%;
`;
