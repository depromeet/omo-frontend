import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from '@components/Layout';
import RankingBar from '@components/RankingBar';
import Button from '@components/Shared/Button';

const Home = () => {
  const router = useRouter();

  const moveOnLoginPage = () => router.push('/login');
  const moveOnRankingPage = () => router.push('/ranking');

  const maximumUserAmount = 10;
  const rankingList = Array.from({ length: maximumUserAmount }, (_, i) => i + 1);

  return (
    <Layout title="홈">
      <LogoSection>
        <span className="logo">OMO</span>
      </LogoSection>
      <LoginSection>
        <div className="notify">지금 바로 로그인하고</div>
        <div className="notify">오마카세 도장깨기를 시작해보세요!</div>
        <div className="login-section">
          <Button text="로그인" bgColor="#c9c9c9" width="48%" clickListener={moveOnLoginPage} />
          <Button text="회원가입" bgColor="#c9c9c9" width="48%" clickListener={moveOnLoginPage} />
        </div>
      </LoginSection>
      <RealtimeRankingSection>
        <h2>실시간 미식가 랭킹</h2>
        {rankingList.map((val) => (
          <RankingBar rank={val} nickname="닉네임" amount={100} key={val} />
        ))}
        <Button text="랭킹 더보기" bgColor="#c9c9c9" clickListener={moveOnRankingPage} />
      </RealtimeRankingSection>
    </Layout>
  );
};

export default Home;

const LogoSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 17px 24px;

  .logo {
    ${({ theme }) => theme.fonts.bold};
    font-size: 24px;
  }
`;

const LoginSection = styled(LogoSection)`
  .notify {
    ${({ theme }) => theme.fonts.bold};
    line-height: 26px;
    font-size: 18px;
  }

  .login-section {
    margin-top: 17px;

    button:first-child {
      margin-right: 4%;
    }
  }
`;

const RealtimeRankingSection = styled(LogoSection)`
  width: 100%;

  h2 {
    ${({ theme }) => theme.fonts.bold};
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 14px;
  }

  .ranking-bar {
    margin-bottom: 11px;
  }
`;
