import React, { Dispatch, SetStateAction } from 'react';

import { NicknameInputErrorType } from '@@types/shared';
import { MAX_NICKNAME_LENGTH, MIN_NICKNAME_LENGTH } from '@constants/login';
import { NICKNAME_INPUT_ERROR_TEXT } from '@constants/shared';
import { requestCheckDuplicateName } from '@request';
import debounce from '@utils/debounce';

import * as S from './styles';

interface INicknameInput {
  errorStatus: NicknameInputErrorType;
  setNickname: Dispatch<SetStateAction<string>>;
  setErrorStatus: Dispatch<SetStateAction<NicknameInputErrorType>>;
}

/**
 * @usage
 * - pages/login/nickname.tsx, pages/mypage/changeNickname.tsx
 */
const NicknameInput = ({
  errorStatus, //
  setNickname,
  setErrorStatus,
}: INicknameInput) => {
  const isNicknameValid = (val: string) =>
    val.length >= MIN_NICKNAME_LENGTH && val.length <= MAX_NICKNAME_LENGTH;

  /**
   * 유저가 입력하는 Nickname을 검증합니다.
   * 검증 수단은 다음과 같습니다.
   * - 1. 유저 닉네임이 2 ~ 8글자여야 합니다.
   * - 2. 유저 닉네임이 중복되지 않아야 합니다.
   */
  const checkNickname = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);

    if (!isNicknameValid(value)) return setErrorStatus('default');
    requestCheckDuplicateName(value).catch(() => setErrorStatus('duplicate'));

    setErrorStatus('usable');
  }, 200);

  return (
    <S.NicknameInputWrapper>
      <input
        type="text"
        placeholder="닉네임 입력"
        maxLength={MAX_NICKNAME_LENGTH}
        onChange={checkNickname}
      />
      <S.ErrorNotifySpan errorStatus={errorStatus}>
        {NICKNAME_INPUT_ERROR_TEXT[errorStatus]}
      </S.ErrorNotifySpan>
    </S.NicknameInputWrapper>
  );
};

export default NicknameInput;
