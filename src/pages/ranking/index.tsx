import ActionSheet, { ActionSheetRef } from 'actionsheet-react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRef, useState } from 'react';
import styled from 'styled-components';

import CloseIcon from '@assets/close.svg';
import Earth from '@assets/earth.svg';
import Guidance from '@assets/guidance.svg';
import BackgroundPattern from '@assets/pattern-one.svg';
import Layout from '@components/Layout';
import MyProfile from '@components/MyProfile';
import { RankingNotifyModal } from '@components/Shared/Modal';
import RankingCard from '@components/Shared/RankingCard';
import VisitedStore from '@components/VisitedStore';
import { PIONEER_PHRASE } from '@constants/ranking';
import { RANK_SUFFIX, STAMP_AMOUNT_SUFFIX } from '@constants/shared';
import { IMyOmakase } from '@recoil/myOmakaseState';

import { IRankerState, useRankerListValue } from '@recoil/rankerState';
import { useFetchUserValue } from '@recoil/userState';
import { useVisitedOmakaseRecoilValue } from '@recoil/visitedOmakaseState';
import { dummys } from '@temp/VisitedStoreDummy';

const Ranking = () => {
  const { contents: userValue } = useFetchUserValue();
  const { contents, state } = useRankerListValue();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal((prev) => !prev);
  const [selectedRanker, setSelectedRanker] = useState<IRankerState | null>(null);
  const ref = useRef<ActionSheetRef>();
  const replaceDate = (date: IMyOmakase['create_date']) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  };
  const {
    contents: { omakases },
  } = useVisitedOmakaseRecoilValue(selectedRanker?.email ?? '');

  const handleOpen = (ranker: IRankerState) => {
    ref.current.open();
    setSelectedRanker(ranker);
  };

  const handleClose = () => {
    ref.current.close();
  };

  if (state === 'loading') return '랭킹 불러오는중..';
  const rankerValue = contents as IRankerState[];

  return (
    <Layout title="Ranking" noHeader>
      <OmakasePioneerSection>
        <h1>명예의 전당 ✨</h1>
        <OmakasePioneerWrapper>
          <p>{PIONEER_PHRASE}</p>
          <p>{rankerValue[0]?.nickname}</p>
          <BackgroundPattern className="pattern" />
          <Earth className="earth" />
        </OmakasePioneerWrapper>
      </OmakasePioneerSection>
      <RankingSection>
        <h1>전체랭킹</h1>
        <h2>랭킹은 매일 24시에 갱신됩니다.</h2>
        <Guidance className="guidance" onClick={toggleModal} />
        {rankerValue.map((ranker) => (
          <RankingCard
            ranker={ranker}
            rankerInfoClickHandler={() => handleOpen(ranker)}
            key={ranker.ranking}
          />
        ))}
      </RankingSection>
      <MyRankingSection>
        <RankingSectionArea>
          <h1>내 순위</h1>
          <RankBlock>
            {userValue.ranking ?? '-'}
            {RANK_SUFFIX}
          </RankBlock>
        </RankingSectionArea>
        <Divider />
        <RankingSectionArea>
          <h1>도장 깬 횟수</h1>
          <h2>
            {userValue.stamp_count}
            {STAMP_AMOUNT_SUFFIX}
          </h2>
        </RankingSectionArea>
      </MyRankingSection>
      {isOpenModal && <RankingNotifyModal toggleModal={toggleModal} />}
      <ActionSheet ref={ref}>
        <BottomActionSheetStyle>
          <RankerPage>
            <TitleWrapper className="container">
              <Title className="store-list-title">{selectedRanker?.nickname}님</Title>
              <CloseIcon onClick={handleClose} />
            </TitleWrapper>
            {selectedRanker !== null && <MyProfile userValue={selectedRanker} />}
            <div className="store-list-layout container">
              {omakases &&
                omakases.map((user: IMyOmakase) => (
                  <VisitedStore
                    key={user.id}
                    id={user.id}
                    image={user.photo_url}
                    name={user.name}
                  />
                ))}
            </div>
          </RankerPage>
        </BottomActionSheetStyle>
      </ActionSheet>
    </Layout>
  );
};

export default Ranking;

const OmakasePioneerSection = styled.section`
  padding: 0 20px;

  & > h1 {
    ${({ theme }) => theme.fonts.subTitle1};
    line-height: 32px;
    margin: 16px 0 10px 0;
  }
`;

const OmakasePioneerWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 131.35px;
  background-color: #293ad2;
  padding: 20px;
  border-radius: 16px;

  p {
    color: #fff;
    ${({ theme }) => theme.fonts.contents1};

    &:nth-child(2) {
      margin-top: 10px;
      ${({ theme }) => theme.fonts.header3};
    }
  }

  svg.pattern {
    position: absolute;
    top: -30px;
    left: -30px;
  }
  svg.earth {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
`;

const RankingSection = styled.section`
  position: relative;
  margin-top: 35px;
  padding: 0 20px;
  padding-bottom: 85px;
  /* MyRankingSection에 가려져 랭킹 10위까지 보여주기 위한 padding-bottom */

  h1 {
    ${({ theme }) => theme.fonts.subTitle1};
    line-height: 32px;
  }

  h2 {
    ${({ theme }) => theme.fonts.contents3};
    color: ${({ theme }) => theme.colors.black400};
    line-height: 17px;
    margin-bottom: 20px;
  }

  .guidance {
    position: absolute;
    top: 22px;
    right: 20px;
  }
`;

const MyRankingSection = styled.section`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 71px;
  left: 0px;
  bottom: 65px;

  background-color: #fff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 44px;
`;

const RankingSectionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 108px;

  h1 {
    ${({ theme }) => theme.fonts.subTitle2};
    line-height: 32px;
  }
  h2 {
    ${({ theme }) => theme.fonts.contents1};
  }
`;

const RankBlock = styled.div`
  width: 52px;
  height: 32px;

  background-color: #293ad2;
  border-radius: 24px;
  ${({ theme }) => theme.fonts.contents2};
  line-height: 32px;
  text-align: center;
  color: #fff;
`;

const Divider = styled.div.attrs({
  'aria-hidden': true,
})`
  width: 1px;
  height: 32px;
  background-color: #e7e7e7;
`;

const BottomActionSheetStyle = styled.div`
  height: 91.33vh;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0 10px 0;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.header3_5};

  strong {
    font-weight: bold;
  }
`;

const RankerPage = styled.div`
  .store-list-title {
    ${({ theme }) => theme.fonts.subTitle1};
    margin-bottom: 1.5rem;
  }
  .store-list-layout {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px 15px;
  }
`;
