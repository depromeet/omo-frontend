import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from '@components/Layout';
import RankingProfile from '@components/RankerProfile/RankingProfile';
import RankingBar from '@components/RankingBar';
import Button from '@components/Shared/Button';

interface ILoginSection {
  moveOnLoginPage: () => void;
}

interface IRealtimeRankingSection {
  moveOnRankingPage: () => void;
  rankingList?: number[];
}

interface IStampSection {
  moveOnSearchPage: () => void;
}

interface IDistrictRankingSection extends IRealtimeRankingSection {
  top3RankerList: {
    rank: number;
    name: string;
    amount: number;
  }[];
}

const LoginSection = ({ moveOnLoginPage }: ILoginSection) => {
  return (
    <LoginSectionWrapper>
      <div className="notify">지금 바로 로그인하고</div>
      <div className="notify">오마카세 도장깨기를 시작해보세요!</div>
      <div className="login-section">
        <Button text="로그인" bgColor="#c9c9c9" width="48%" clickListener={moveOnLoginPage} />
        <Button text="회원가입" bgColor="#c9c9c9" width="48%" clickListener={moveOnLoginPage} />
      </div>
    </LoginSectionWrapper>
  );
};

const RealtimeRankingSection = ({ moveOnRankingPage, rankingList }: IRealtimeRankingSection) => (
  <RealtimeRankingSectionWrapper>
    <h2>실시간 미식가 랭킹</h2>
    {rankingList?.map((val: number) => (
      <RankingBar rank={val} nickname="닉네임" amount={100} key={val} />
    ))}
    <Button text="랭킹 더보기" bgColor="#c9c9c9" clickListener={moveOnRankingPage} />
  </RealtimeRankingSectionWrapper>
);

const StampSection = ({ moveOnSearchPage }: IStampSection) => (
  <StampSectionWrapper>
    <div className="notify">지니님!</div>
    <div className="notify">17번 더 도장깨면</div>
    <div className="notify">초밥력이 &apos;중급&apos;으로 상승해요</div>

    <div className="stamp-breakdown"></div>

    <Button text="도장깨기" bgColor="#c9c9c9" clickListener={moveOnSearchPage} />
  </StampSectionWrapper>
);

const DistrictRankingSection = ({ moveOnRankingPage, top3RankerList }: IDistrictRankingSection) => (
  <DistrictRankingSectionWrapper>
    <div className="notify">지니님은 영등포구에서</div>
    <div className="notify">13번째 초밥 고수에요!</div>
    <div className="rankers">
      {top3RankerList.map(({ rank, name, amount }) => (
        <RankingProfile rank={rank} name={name} amount={amount} key={rank} />
      ))}
    </div>
    <Button text="랭킹 더보기" bgColor="#c9c9c9" clickListener={moveOnRankingPage} />
  </DistrictRankingSectionWrapper>
);

const Home = () => {
  const router = useRouter();
  const moveOnLoginPage = () => router.push('/login');
  const moveOnRankingPage = () => router.push('/ranking');
  const moveOnSearchPage = () => router.push('/search');

  const maximumUserAmount = 10;
  const rankingList = Array.from({ length: maximumUserAmount }, (_, i) => i + 1);
  const top3RankerList = [
    { rank: 12, name: '박일등', amount: 34 },
    { rank: 13, name: '지니', amount: 13 },
    { rank: 3, name: '박일등', amount: 3 },
  ];

  return (
    <Layout title="홈">
      <LogoSection>
        <span className="logo">OMO</span>
      </LogoSection>
      {/* <LoginSection moveOnLoginPage={moveOnLoginPage} />
      <RealtimeRankingSection moveOnRankingPage={moveOnRankingPage} rankingList={rankingList} /> */}
      <StampSection moveOnSearchPage={moveOnSearchPage} />
      <DistrictRankingSection
        moveOnRankingPage={moveOnRankingPage}
        top3RankerList={top3RankerList}
      />
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

  .notify {
    ${({ theme }) => theme.fonts.bold};
    line-height: 26px;
    font-size: 18px;
  }
`;

const LoginSectionWrapper = styled(LogoSection)`
  .login-section {
    margin-top: 17px;

    button:first-child {
      margin-right: 4%;
    }
  }
`;

const RealtimeRankingSectionWrapper = styled(LogoSection)`
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

const StampSectionWrapper = styled(LogoSection)`
  width: 100%;

  .stamp-breakdown {
    width: 100%;
    height: 211px;
    background-color: #efefef;
    margin: 18px 0;
  }
`;

const DistrictRankingSectionWrapper = styled(LogoSection)`
  .rankers {
    display: flex;
    justify-content: space-between;
    margin: 18px 0;
  }
`;
