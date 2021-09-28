import type { NextPage } from 'next';
import styled from 'styled-components';

import PlainLogo from '@assets/logo.svg';
import OAuthButton from '@components/OAuthButton';

const Home: NextPage = () => {
  return (
    <HomePage>
      <Logo />
      <div className="button-wrapper">
        <OAuthButton type="naver" />
        <OAuthButton type="kakao" />
        <OAuthButton type="apple" />
      </div>
    </HomePage>
  );
};

export default Home;

const HomePage = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
  height: 100vh;
  padding: 0 20px;

  .button-wrapper {
    position: absolute;
    width: calc(100% - 40px);
    bottom: 5rem;

    button:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const Logo = styled(PlainLogo)`
  margin-top: 10rem;
`;
