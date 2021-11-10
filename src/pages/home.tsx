import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import HorizontalLogo from '@assets/horizontal-logo.svg';
import InfoCard from '@components/InfoCard';
import Layout from '@components/Layout';
import OmakaseStampCard from '@components/OmakaseStampCard';
import RankingCard from '@components/Shared/RankingCard';
import useLocalStorage from '@hooks/useLocalStorage';
import { useUserValue } from '@recoil/userState';
import { setTokenOnHeader } from '@request';
import { getObjectFromQuery } from '@utils/getObjectFormQuery';

const Home = () => {
  const { query } = useRouter();
  const { setStorageItem } = useLocalStorage('omo-refresh');

  const userValue = useUserValue();
  const top3Rankers = [
    { rank: 1, nickname: '오모마카세에대출', amount: 24 },
    { rank: 2, nickname: '지니지니', amount: 14 },
    { rank: 3, nickname: '오마카새우', amount: 8 },
  ];

  const setRefreshOnCookie = (refresh: string) => {
    const TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;
    const date = new Date();
    date.setTime(date.getTime() + TWO_WEEKS);
    document.cookie = `refresh=${refresh};secure;SameSite=Lax;expires=${date.toUTCString()}`;
  };

  useEffect(() => {
    if (query.status) {
      const urlQuery = query.status as string;
      const essentialData = urlQuery.split('?').slice(1);
      const tokenInfo = getObjectFromQuery(essentialData);

      setTokenOnHeader(tokenInfo.access);
      setRefreshOnCookie(tokenInfo.refresh);
    }
  }, [query, setStorageItem]);

  return (
    <Layout title="홈" noHeader>
      <HomePage>
        <MyInfoSection>
          <LogoArea>
            <HorizontalLogo />
          </LogoArea>
          <CatchPhraseArea>{'오늘은\n오마카세 먹는날!'}</CatchPhraseArea>
          <InfoCardArea>
            <InfoCard type="visited" value={userValue.info?.amount} />
            <InfoCard type="ranking" value={userValue.info?.ranking} />
          </InfoCardArea>
          <OmakaseStampCard nickname={userValue.info?.nickname} level={userValue.info?.level} />
        </MyInfoSection>
        <RankingSection>
          <RankingSectionTitle>{'진짜들의 오마카세 엿보기 👀'}</RankingSectionTitle>
          <p>{'상위 랭킹 고수들의 오마카세 리스트를 참고해 보세요!'}</p>
          <RankingCardArea>
            {top3Rankers.map((props) => (
              <RankingCard key={props.rank} props={props} />
            ))}
          </RankingCardArea>
        </RankingSection>
      </HomePage>
    </Layout>
  );
};

export default Home;

const HomePage = styled.main`
  height: 100%;
  background-color: #f8f8fc;
  letter-spacing: -0.02em;
`;

const MyInfoSection = styled.section`
  padding: 0 20px 20px 20px;
  background-color: #fff;
`;

const LogoArea = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
`;

const CatchPhraseArea = styled.h1`
  line-height: 44.8px;
  font-size: 32px;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

const InfoCardArea = styled.div`
  width: 100%;
  display: flex;
  gap: 13px;
`;

const RankingSection = styled(MyInfoSection)`
  padding-top: 20px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 32px;
  color: #54545a;
`;

const RankingSectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.subTitle1};
  line-height: 32px;
  color: #000;
`;

const RankingCardArea = styled.div`
  margin-top: 20px;
`;
