import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { NicknameInputErrorType } from '@@types/shared';
import LoginLayout from '@components/Layout/LoginLayout';
import NicknameInput from '@components/NicknameInput';
import Button from '@components/Shared/Button';
import { useSetSignupFormState } from '@recoil/signupFormState';

const Nickname = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<NicknameInputErrorType>('default');
  const setSignupFormState = useSetSignupFormState();

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

        <NicknameInput
          errorStatus={errorStatus}
          setNickname={setNickname}
          setErrorStatus={setErrorStatus}
        />
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
