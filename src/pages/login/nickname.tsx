import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { NicknameInputErrorType } from '@@types/shared';
import LoginLayout from '@components/Layout/LoginLayout';
import NicknameInput from '@components/NicknameInput';
import Button from '@components/Shared/Button';
import { MAX_NICKNAME_LENGTH, MIN_NICKNAME_LENGTH } from '@constants/login';
import { useSetSignupFormState } from '@recoil/signupFormState';

const Nickname = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<NicknameInputErrorType>('default');
  const setSignupFormState = useSetSignupFormState();

  const isNicknameValid = (val: string) =>
    val.length > MIN_NICKNAME_LENGTH && val.length < MAX_NICKNAME_LENGTH;
  const isNicknameDuplicated = (val: string) => {
    //TODO: 백엔드 중복 검증 API 연결해야함
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

  /**
   * errorStatus가 usable 일 경우,
   * recoil에 닉네임 상태를 반영하고 profile 설정 페이지로 이동합니다.
   */
  const onClickNextButton = () => {
    if (errorStatus !== 'usable') return;
    setSignupFormState((state) => ({ ...state, nickname }));
    router.push('/login/profile');
  };

  return (
    <LoginLayout>
      <Content>
        <div className="welcome-letter">어서오세요!</div>
        <div className="welcome-sub-letter">닉네임을 정해주세요 (최대 8자)</div>

        <NicknameInput errorStatus={errorStatus} checkNickname={checkNickname} />
      </Content>

      <Button
        text="다음"
        width="calc(100% - 40px)"
        position="absolute"
        left="20px"
        bottom="3rem"
        disabled={errorStatus !== 'usable'}
        clickListener={onClickNextButton}
      />
    </LoginLayout>
  );
};

export default Nickname;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 310px;
  margin-top: 7rem;
  padding: 0 20px;

  svg {
    display: block;
    margin: 0 auto;
  }

  .welcome-letter {
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    margin: 29px 0 6px 0;
  }

  .welcome-sub-letter {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 40px;
  }
`;
