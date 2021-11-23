import ActionSheet, { ActionSheetRef } from 'actionsheet-react';
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
import { IRankerState, useRankerRecoilValue } from '@recoil/rankerState';
import { useFetchUserValue } from '@recoil/userState';
import { dummys } from '@temp/VisitedStoreDummy';

const Ranking = () => {
  const { contents: userValue } = useFetchUserValue();
  const { contents, state } = useRankerRecoilValue();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal((prev) => !prev);
  const rankerValue = contents as IRankerState[];

  const ref = useRef<ActionSheetRef>();

  const handleOpen = () => {
    ref.current.open();
  };

  const handleClose = () => {
    ref.current.close();
  };

  if (state === 'loading') return '랭킹 불러오는중..';

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
          <>
            <RankingCard ranker={ranker} rankerInfoClickHandler={handleOpen} key={ranker.ranking} />
            <ActionSheet ref={ref}>
              <BottomActionSheetStyle>
                <TitleWrapper>
                  <Title>{ranker.nickname}님</Title>
                  <CloseIcon onClick={handleClose} />
                </TitleWrapper>
                <MyProfile userValue={ranker}></MyProfile>
                {dummys.map((user) => (
                  <VisitedStore
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    photo_url={user.photo_url}
                    county={user.county}
                    create_date={user.create_date}
                    is_certificated={user.is_certificated}
                  />
                ))}
              </BottomActionSheetStyle>
            </ActionSheet>
          </>
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
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.header3_5};

  strong {
    font-weight: bold;
  }
`;
