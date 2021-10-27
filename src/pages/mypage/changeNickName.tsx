import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { NicknameInputErrorType } from '@@types/shared';
import ModalLayout from '@components/Layout/ModalLayout';
import NicknameInput from '@components/NicknameInput';
import { useSetUserState } from '@recoil/userState';

const ChangeNickName = () => {
  const [nickname, setNickname] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<NicknameInputErrorType>('default');
  const setUserState = useSetUserState();
  const router = useRouter();

  const onClick = () => {
    if (errorStatus !== 'usable') return;

    if (confirm('닉네임을 변경하시겠습니까?')) {
      setUserState((prev) => ({ ...prev, info: { ...prev.info, nickname } }));
      alert('닉네임이 변경되었습니다.');
      router.push('/mypage');
    }
  };

  return (
    <ModalLayout
      title="닉네임변경"
      buttonContent="확인"
      clickHandler={onClick}
      disabled={errorStatus !== 'usable'}
    >
      <ChangeNickNamePage>
        <Title>변경할 닉네임을 정해주세요. (최대 8자)</Title>
        <NicknameInput
          errorStatus={errorStatus}
          setNickname={setNickname}
          setErrorStatus={setErrorStatus}
        />
      </ChangeNickNamePage>
    </ModalLayout>
  );
};

export default ChangeNickName;

const ChangeNickNamePage = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  border-top: 1px solid #eff0f6;

  h1 {
    margin-bottom: 40px;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subTitle3};
  margin-top: 30px;
`;
