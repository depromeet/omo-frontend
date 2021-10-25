import { useState } from 'react';
import styled from 'styled-components';

import { NicknameInputErrorType } from '@@types/shared';
import ModalLayout from '@components/Layout/ModalLayout';
import NicknameInput from '@components/NicknameInput';

const ChangeNickName = () => {
  const [nickname, setNickname] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<NicknameInputErrorType>('default');

  const onClick = () => {
    if (errorStatus !== 'usable') return;

    // TODO: API Call
    alert(`변경된 닉네임 : ${nickname}`);
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
