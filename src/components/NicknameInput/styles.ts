import styled from 'styled-components';

import { NicknameInputErrorType } from '@@types/shared';
import { NICKNAME_ERROR_STATUS_COLOR } from '@constants/shared';

export const NicknameInputWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    all: unset;
    width: 100%;
    height: 29px;
    border-bottom: 1px solid #000;

    color: #000;

    ::placeholder {
      color: #b8b8b8;
    }
  }
`;

export const ErrorNotifySpan = styled.span<{ errorStatus: NicknameInputErrorType }>`
  position: absolute;
  bottom: 4px;
  right: 0;
  line-height: 18px;
  font-size: 12px;

  color: ${({ errorStatus }) => NICKNAME_ERROR_STATUS_COLOR[errorStatus]};
`;
