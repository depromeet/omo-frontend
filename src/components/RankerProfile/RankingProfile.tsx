import * as S from './styles';

interface IRankingProfile {
  rank: number;
  name: string;
  amount: number;
}

const RankingProfile = ({ rank, name, amount }: IRankingProfile) => (
  <S.RankerProfileWrapper>
    <S.Image />
    <S.Rank>{rank}</S.Rank>
    <div className="text">{name}</div>
    <div className="text">{amount}개</div>
  </S.RankerProfileWrapper>
);

export default RankingProfile;
