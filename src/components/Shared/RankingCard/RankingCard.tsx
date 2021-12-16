import Image from 'next/image';
import Link from 'next/link';

import MessageBubble from '@assets/message-bubble.svg';
import RightButton from '@assets/ranking-card-right-button.svg';
import { RANK_SUFFIX, STAMP_AMOUNT_PREFIX, STAMP_AMOUNT_SUFFIX } from '@constants/shared';
import { IRankerState } from '@recoil/rankerState';

import * as S from './styles';

/**
 * @usage Home, Ranking Page
 */
const RankingCard = ({
  ranker,
  rankerInfoClickHandler,
}: {
  ranker: IRankerState;
  rankerInfoClickHandler?: () => void;
}) => {
  const { ranking, nickname, stamp_count, profile_url } = ranker;
  const isRanker = [1, 2, 3].includes(ranking);
  const imageURL = `${process.env.API_ENDPOINT}${profile_url}`;

  return (
    <S.RankingCardWrapper className="ranking-card" rank={ranking}>
      <S.ProfileArea rank={ranking}>
        {!isRanker && (
          <S.RankIndicator>
            <span>
              {ranking}
              {RANK_SUFFIX}
            </span>
          </S.RankIndicator>
        )}
        {isRanker && (
          <>
            <S.ProfileBubble>
              <MessageBubble />
              <span>
                {ranking}
                {RANK_SUFFIX}
              </span>
            </S.ProfileBubble>
            <Image
              src={imageURL || '/images/default-profile.png'}
              width={55}
              height={55}
              alt="default-profile"
            />
          </>
        )}
      </S.ProfileArea>
      <S.InfoArea>
        <S.Nickname>
          {nickname}
          {!isRanker && (
            <span>
              ({stamp_count}
              {STAMP_AMOUNT_SUFFIX})
            </span>
          )}
        </S.Nickname>
        {isRanker && (
          <S.StampAmount>
            {STAMP_AMOUNT_PREFIX}
            {stamp_count}
            {STAMP_AMOUNT_SUFFIX}
          </S.StampAmount>
        )}
      </S.InfoArea>
      <S.RightButton>
        <RightButton onClick={rankerInfoClickHandler} />
      </S.RightButton>
    </S.RankingCardWrapper>
  );
};

RankingCard.defaultProps = {
  ranker: {
    ranking: 0,
    nickname: '',
    stampCount: 0,
  },
};

export default RankingCard;
