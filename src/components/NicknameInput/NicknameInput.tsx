import React, { Dispatch, SetStateAction } from 'react';

import { NicknameInputErrorType } from '@@types/shared';
import { MAX_NICKNAME_LENGTH, MIN_NICKNAME_LENGTH } from '@constants/login';
import { NICKNAME_INPUT_ERROR_TEXT } from '@constants/shared';

import * as S from './styles';

interface INicknameInput {
  errorStatus: NicknameInputErrorType;
  setNickname: Dispatch<SetStateAction<string>>;
  setErrorStatus: Dispatch<SetStateAction<NicknameInputErrorType>>;
}

/**
 * TODO:
 * 외부 버튼과 의존성이 강합니다.
 * 이를 분리해줄 방법이 마땅히 생각이 나지 않아 이대로 놔뒀는데,
 * 추후에 괜찮은 아이디어가 생각나면 리팩토링할 계획입니다.
 *
 * @usage
 * - pages/login/nickname.tsx, pages/mypage/changeNickname.tsx
 */
const NicknameInput = ({
  errorStatus, //
  setNickname,
  setErrorStatus,
}: INicknameInput) => {
  const isNicknameValid = (val: string) =>
    val.length > MIN_NICKNAME_LENGTH && val.length < MAX_NICKNAME_LENGTH;

  //TODO: 백엔드 중복 검증 API 연결해야함
  const isNicknameDuplicated = (val: string) => {
    if (val === '중복된닉네임') return false;
    return true;
  };

  /**
   * 유저가 입력하는 Nickname을 검증합니다.
   * 검증 수단은 다음과 같습니다.
   * - 1. 유저 닉네임이 2 ~ 8글자여야 합니다.
   * - 2. 유저 닉네임이 중복되지 않아야 합니다.
   */
  const checkNickname = (value: string) => {
    setNickname(value);
    if (!isNicknameValid(value)) return setErrorStatus('default');
    if (!isNicknameDuplicated(value)) return setErrorStatus('duplicate');
    setErrorStatus('usable');
  };

  return (
    <S.NicknameInputWrapper>
      <input
        type="text"
        placeholder="닉네임 입력"
        maxLength={MAX_NICKNAME_LENGTH}
        onChange={(e) => checkNickname(e.target.value)}
      />
      <S.ErrorNotifySpan errorStatus={errorStatus}>
        {NICKNAME_INPUT_ERROR_TEXT[errorStatus]}
      </S.ErrorNotifySpan>
    </S.NicknameInputWrapper>
  );
};

export default NicknameInput;
