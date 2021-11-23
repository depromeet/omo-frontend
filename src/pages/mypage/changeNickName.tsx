import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { NicknameInputErrorType, requestError } from '@@types/shared';
import ModalLayout from '@components/Layout/ModalLayout';
import NicknameInput from '@components/NicknameInput';
import { NETWORK_ERROR, NICKNAME_ERROR, UNKNOWN_ERROR } from '@constants/error';
import { useRefetchUserValue } from '@recoil/userState';
import { requestChangeNickname } from '@request';
import { showAlertModal, showConfirmModal } from '@utils/modal';

const ChangeNickName = () => {
  const [nickname, setNickname] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<NicknameInputErrorType>('default');
  const router = useRouter();

  const refreshUserInfo = useRefetchUserValue();

  const handleChangeNickname = async () => {
    if (errorStatus !== 'usable') return;
    if (!showConfirmModal('닉네임을 변경하시겠습니까?')) return;

    try {
      await requestChangeNickname(nickname);
      refreshUserInfo(Date.now());
      showAlertModal('닉네임이 변경되었습니다.');
      router.push('/mypage');
    } catch (error) {
      const { response } = error as requestError;
      if (!response) return showAlertModal(NETWORK_ERROR);

      const { status } = response;
      if (NICKNAME_ERROR[status]) return showAlertModal(NICKNAME_ERROR[status]);
      return showAlertModal(UNKNOWN_ERROR);
    }
  };

  return (
    <ModalLayout
      title="닉네임변경"
      buttonContent="확인"
      clickHandler={handleChangeNickname}
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
