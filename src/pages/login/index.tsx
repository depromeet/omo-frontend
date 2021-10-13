import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import AppleIcon from '@assets/apple.svg';
import KakaoIcon from '@assets/kakao.svg';
import Logo from '@assets/logo.svg';
import NaverIcon from '@assets/naver.svg';

const Login: NextPage = () => {
  const router = useRouter();

  const onClickOAuthButton = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof Element)) return;

    if (e.target.closest('.oauth-button')) {
      // TODO: 추후에 플랫폼에 맞게 처리
      router.push('/login/nickname');
    }
  };

  return (
    <HomePage>
      <Content>
        <LogoSection>
          <Logo />
        </LogoSection>
        <SNSSection>
          <span>SNS 간편로그인</span>
          <div className="oauth-button-wrapper" onClick={onClickOAuthButton}>
            <div className="oauth-button naver">
              <NaverIcon />
              <div>Naver</div>
            </div>
            <div className="oauth-button kakao">
              <KakaoIcon />
              <div>Kakao</div>
            </div>
            <div className="oauth-button apple">
              <AppleIcon />
              <div>Apple</div>
            </div>
          </div>
        </SNSSection>
      </Content>
    </HomePage>
  );
};

export default Login;

const HomePage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

const LogoSection = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SNSSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 123px;
  font-size: 12px;
  color: #000;

  .oauth-button-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .oauth-button {
    width: 60px;
    display: inline;
    cursor: pointer;

    div {
      width: fit-content;
      margin: 7px auto 0;
    }
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 225px;
  height: 450px;
`;
