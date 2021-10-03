import * as S from './styles';

interface RankingBarProps {
  rank: number;
  nickname: string;
  amount: number;
}

const RankingBar = ({ rank, nickname, amount }: RankingBarProps) => {
  return (
    <S.RankingBarWrapper className="ranking-bar">
      <span className="rank">{rank}위</span>
      <span className="nickname">{nickname}</span>
      <span className="amount">{amount}개</span>
    </S.RankingBarWrapper>
  );
};

export default RankingBar;
