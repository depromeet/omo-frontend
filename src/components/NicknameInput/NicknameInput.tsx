import React from 'react';

import { NicknameInputErrorType } from '@@types/shared';
import { NICKNAME_INPUT_ERROR_TEXT } from '@constants/shared';

import * as S from './styles';

interface INicknameInput {
  errorStatus: NicknameInputErrorType;
  checkNickname: (arg0: string) => void;
}

const NicknameInput = ({ errorStatus, checkNickname }: INicknameInput) => {
  return (
    <S.NicknameInputWrapper>
      <input
        type="text"
        placeholder="닉네임 입력"
        maxLength={8}
        onChange={(e) => checkNickname(e.target.value)}
      />
      <S.ErrorNotifySpan errorStatus={errorStatus}>
        {NICKNAME_INPUT_ERROR_TEXT[errorStatus]}
      </S.ErrorNotifySpan>
    </S.NicknameInputWrapper>
  );
};

export default NicknameInput;
