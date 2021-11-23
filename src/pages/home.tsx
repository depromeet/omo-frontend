import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import HorizontalLogo from '@assets/horizontal-logo.svg';
import InfoCard from '@components/InfoCard';
import Layout from '@components/Layout';
import OmakaseStampCard from '@components/OmakaseStampCard';
import RankingCard from '@components/Shared/RankingCard';
import { IRankerState } from '@recoil/rankerState';
import { useFetchUserValue, useRefetchUserValue } from '@recoil/userState';
import { setAccessTokenOnHeader } from '@request';
import getObjectFromQuery from '@utils/getObjectFormQuery';
import setRefreshTokenOnCookie from '@utils/setRefreshTokenOnCookie';

const Home = () => {
  const { query } = useRouter();
  const { contents: userState } = useFetchUserValue();
  const refetchUserValue = useRefetchUserValue();
  const [isActionSheetActive, setIsActionSheetActive] = useState(false);

  // const top3Rankers: IRankerState[] = [
  //   {
  //     ranking: 1,
  //     nickname: '오모마카세에대출',
  //     stamp_count: 24,
  //     profile_url: 'images/default-profile.png',
  //     power: 1,
  //     email: 'codud2006@naver.com',
  //   },
  //   {
  //     ranking: 2,
  //     nickname: '오모마카세',
  //     stamp_count: 24,
  //     profile_url: 'images/default-profile.png',
  //     power: 1,
  //     email: 'codud2006@naver.com',
  //   },
  //   {
  //     ranking: 3,
  //     nickname: '오마카새우',
  //     stamp_count: 8,
  //     profile_url: 'images/default-profile.png',
  //     power: 1,
  //     email: 'codud2006@naver.com',
  //   },
  // ];

  const setRefreshOnCookie = (refresh: string) => {
    const TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;
    const date = new Date();
    date.setTime(date.getTime() + TWO_WEEKS);
    document.cookie = `refresh=${refresh};SameSite=Lax;expires=${date.toUTCString()}`;
  };
  const handleBottomActionSheet = () => {
    setIsActionSheetActive((prev) => !prev);
  };
  useEffect(() => {
    if (!query.status) return;

    const urlQuery = query.status as string;
    const essentialData = urlQuery.split('?').slice(1);
    const { access, refresh } = getObjectFromQuery(essentialData);

    setAccessTokenOnHeader(access);
    setRefreshTokenOnCookie(refresh);

    if (access) refetchUserValue(Date.now);
  }, [query, refetchUserValue]);

  return (
    <Layout title="홈" noHeader>
      <HomePage>
        <MyInfoSection>
          <LogoArea>
            <HorizontalLogo />
          </LogoArea>
          <CatchPhraseArea>{'오늘은\n오마카세 먹는날!'}</CatchPhraseArea>
          <InfoCardArea>
            <InfoCard type="visited" value={userState.stamp_count} />
            <InfoCard type="ranking" value={userState.ranking} />
          </InfoCardArea>
          <OmakaseStampCard nickname={userState.nickname} level={userState.level} />
        </MyInfoSection>
        <RankingSection>
          <RankingSectionTitle>진짜들의 오마카세 엿보기 👀</RankingSectionTitle>
          <p>상위 랭킹 고수들의 오마카세 리스트를 참고해 보세요!</p>
          <RankingCardArea>
            {/* {top3Rankers.map((props) => (
              <RankingCard
                key={props.ranking}
                ranker={props}
                rankerInfoClickHandler={handleBottomActionSheet}
              />
            ))} */}
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
  justify-content: space-between;
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
