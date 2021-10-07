import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import Mascot from '@assets/mascot.svg';
import LoginLayout from '@components/Layout/LoginLayout';

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
  const [errorStatus] = useState<ErrorType>('usable');

  const onClickNextButton = () => {
    if (errorStatus !== 'usable') return;
    router.push('/login/profile');
  };

  return (
    <LoginLayout>
      <Content>
        <Mascot />
        <div className="welcome-letter">어서오세요!</div>
        <div className="welcome-sub-letter">닉네임을 정해주세요 (최대 10자)</div>
        <div className="nickname-input">
          <input type="text" placeholder="닉네임 입력" maxLength={10} />
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
  margin-top: 6rem;
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
