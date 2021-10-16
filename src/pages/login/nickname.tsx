import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import LoginLayout from '@components/Layout/LoginLayout';
import { MAX_NICKNAME_LENGTH, MIN_NICKNAME_LENGTH } from '@constants/login';
import { userState } from '@recoil/userState';

type ErrorType = 'default' | 'duplicate' | 'usable';

const errorStatusMsg = {
  default: '2자 이상 입력해주세요',
  duplicate: '중복된 닉네임입니다',
  usable: '사용가능한 닉네임입니다',
};

const errorStatusColor = {
  default: '#000',
  duplicate: '#FF473B',
  usable: '#2334CF',
};

const Nickname = () => {
  const router = useRouter();
  const [errorStatus, setErrorStatus] = useState<ErrorType>('duplicate');
  const [nickname, setNickname] = useState<string>('');
  const setNicknameState = useSetRecoilState(userState);

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
    setNicknameState((state) => ({ ...state, info: { nickname: nickname } }));
    router.push('/login/profile');
  };

  return (
    <LoginLayout>
      <Content>
        <div className="welcome-letter">어서오세요!</div>
        <div className="welcome-sub-letter">닉네임을 정해주세요 (최대 8자)</div>
        <div className="nickname-input">
          <input
            type="text"
            placeholder="닉네임 입력"
            maxLength={8}
            onChange={(e) => checkNickname(e.target.value)}
          />
          <ErrorNotifySpan errorStatus={errorStatus}>{errorStatusMsg[errorStatus]}</ErrorNotifySpan>
        </div>
      </Content>
      <NextPageButton errorStatus={errorStatus} onClick={onClickNextButton}>
        다음
      </NextPageButton>
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

  .nickname-input {
    position: relative;
    width: 100%;
  }

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

const ErrorNotifySpan = styled.span<{ errorStatus: ErrorType }>`
  position: absolute;
  bottom: 4px;
  right: 0;
  line-height: 18px;
  font-size: 12px;

  color: ${({ errorStatus }) => errorStatusColor[errorStatus]};
`;

const NextPageButton = styled.button<{ errorStatus: ErrorType }>`
  border: none;
  position: absolute;
  left: 20px;
  bottom: 3rem;
  width: calc(100% - 40px);
  height: 48px;

  margin: 0 auto;
  border-radius: 8px;

  background-color: ${({ errorStatus }) => (errorStatus === 'usable' ? '#2334CF' : '#d7d8dd')};
  color: #fff;

  font-size: 18px;
  font-weight: 700;
  cursor: ${({ errorStatus }) => (errorStatus === 'usable' ? 'pointer' : 'default')};
`;
