import Image from 'next/image';

import * as S from './styles';

interface IRankingCard {
  rank: number;
  nickname: string;
  count: number;
}

const RankingCard = ({ props }: { props: IRankingCard }) => {
  const { rank, nickname, count } = props;

  return (
    <S.RankingCardWrapper className="ranking-card">
      <S.ProfileArea className="ranking-card--profile-area">
        <S.ProfileBubble>
          <Image src="/images/message-bubble.svg" width={40} height={31} alt="rank-bubble" />
          <span>{rank}위</span>
        </S.ProfileBubble>
        <Image src="/images/default-profile.png" width={60} height={60} alt="default-profile" />
      </S.ProfileArea>
      <S.RightButton>
        <Image src="/images/ranking-card-right-button.svg" width={24} height={24} alt="right" />
      </S.RightButton>
    </S.RankingCardWrapper>
  );
};

export default RankingCard;
