import Image from 'next/image';

import MessageBubble from '@assets/message-bubble.svg';
import RightButton from '@assets/ranking-card-right-button.svg';

import * as S from './styles';

interface IRankingCard {
  rank: number;
  nickname: string;
  amount: number;
}

const RankingCard = ({ props }: { props: IRankingCard }) => {
  const { rank, nickname, amount } = props;

  return (
    <S.RankingCardWrapper className="ranking-card" rank={rank}>
      <S.ProfileArea rank={rank}>
        <S.ProfileBubble>
          <MessageBubble />
          <span>{rank}위</span>
        </S.ProfileBubble>
        <Image src="/images/default-profile.png" width={55} height={55} alt="default-profile" />
      </S.ProfileArea>
      <S.InfoArea>
        <S.Nickname>{nickname}</S.Nickname>
        <S.StampAmount>도장 깬 횟수 : {amount}회</S.StampAmount>
      </S.InfoArea>
      <S.RightButton>
        <RightButton />
      </S.RightButton>
    </S.RankingCardWrapper>
  );
};

export default RankingCard;
