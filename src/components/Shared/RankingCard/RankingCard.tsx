import Image from 'next/image';

import MessageBubble from '@assets/message-bubble.svg';
import RightButton from '@assets/ranking-card-right-button.svg';
import { RANK_SUFFIX, STAMP_AMOUNT_PREFIX, STAMP_AMOUNT_SUFFIX } from '@constants/shared';

import * as S from './styles';

interface IRankingCard {
  rank: number;
  nickname: string;
  amount: number;
}

/**
 * @usage Home, Ranking Page
 */
const RankingCard = ({ props }: { props: IRankingCard }) => {
  const { rank, nickname, amount } = props;
  const isRanker = [1, 2, 3].includes(rank);

  return (
    <S.RankingCardWrapper className="ranking-card" rank={rank}>
      <S.ProfileArea rank={rank}>
        {!isRanker && (
          <S.RankIndicator>
            <span>
              {rank}
              {RANK_SUFFIX}
            </span>
          </S.RankIndicator>
        )}
        {isRanker && (
          <>
            <S.ProfileBubble>
              <MessageBubble />
              <span>
                {rank}
                {RANK_SUFFIX}
              </span>
            </S.ProfileBubble>
            <Image src="/images/default-profile.png" width={55} height={55} alt="default-profile" />
          </>
        )}
      </S.ProfileArea>
      <S.InfoArea>
        <S.Nickname>
          {nickname}
          {!isRanker && (
            <span>
              ({amount}
              {STAMP_AMOUNT_SUFFIX})
            </span>
          )}
        </S.Nickname>
        {isRanker && (
          <S.StampAmount>
            {STAMP_AMOUNT_PREFIX}
            {amount}
            {STAMP_AMOUNT_SUFFIX}
          </S.StampAmount>
        )}
      </S.InfoArea>
      <S.RightButton>
        <RightButton />
      </S.RightButton>
    </S.RankingCardWrapper>
  );
};

export default RankingCard;
