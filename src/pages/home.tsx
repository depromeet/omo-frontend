import type { NextPage } from 'next';
import styled from 'styled-components';

import AppleIcon from '@assets/apple.svg';
import KakaoIcon from '@assets/kakao.svg';
import Mascot from '@assets/mascot.svg';
import NaverIcon from '@assets/naver.svg';
import PlainOMOLetter from '@assets/omo-letter.svg';

const Home: NextPage = () => {
  return (
    <HomePage>
      <Content>
        <LogoSection>
          <Mascot />
          <LogoLetter />
          <SubLetter>오마카세의</SubLetter>
          <SubLetter>모든것</SubLetter>
        </LogoSection>
        <SNSSection>
          <span>SNS 간편로그인</span>
          <div className="oauth-button-wrapper">
            <div className="oauth-button">
              <NaverIcon />
              <div>Naver</div>
            </div>
            <div className="oauth-button">
              <KakaoIcon />
              <div>Kakao</div>
            </div>
            <div className="oauth-button">
              <AppleIcon />
              <div>Apple</div>
            </div>
          </div>
        </SNSSection>
      </Content>
    </HomePage>
  );
};

export default Home;

const HomePage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2334cf;
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
  color: #fff;

  .oauth-button-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .oauth-button {
    width: 60px;
    display: inline;
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
  height: 500px;
`;

const LogoLetter = styled(PlainOMOLetter)`
  margin: 5px 0 15px;
`;

const SubLetter = styled.div`
  ${({ theme }) => theme.fonts.bold};
  letter-spacing: -0.02em;
  line-height: 18px;
  color: #fff;
`;
