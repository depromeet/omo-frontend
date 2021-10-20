import styled from 'styled-components';

import HorizontalLogo from '@assets/horizontal-logo.svg';
import InfoCard from '@components/InfoCard';
import Layout from '@components/Layout';
import { useUserValue } from '@recoil/userState';

const Home = () => {
  const userValue = useUserValue();

  return (
    <Layout title="홈" noHeader>
      <HomePage>
        <MyInfoSection>
          <LogoArea>
            <HorizontalLogo />
          </LogoArea>
          <CatchPhraseArea>
            <div>오늘은</div>
            <div>오마카세 먹는날!</div>
          </CatchPhraseArea>
          <InfoCardArea>
            <InfoCard type="visited" value={userValue.info?.visitedOmakase} />
            <InfoCard type="ranking" value={userValue.info?.ranking} />
          </InfoCardArea>
        </MyInfoSection>
      </HomePage>
    </Layout>
  );
};

export default Home;

const HomePage = styled.main`
  height: 100%;
  background-color: #f8f8fc;
`;

const MyInfoSection = styled.section`
  padding: 0 20px;
  background-color: #fff;
`;

const LogoArea = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
`;

const CatchPhraseArea = styled.div`
  line-height: 44.8px;
  font-size: 32px;
  margin-bottom: 20px;
`;

const InfoCardArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
