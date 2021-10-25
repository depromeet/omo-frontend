import { InfoCardType } from '@@types/home';
import PatternOne from '@assets/pattern-one.svg';
import PatternTwo from '@assets/pattern-two.svg';

import * as S from './styles';

interface IInfoCard {
  type: InfoCardType;
  value?: number;
}

const InfoCard = ({ type, value }: IInfoCard) => {
  const title = type === 'visited' ? `내가 다녀간\n오마카세` : `나의 오마카세\n랭킹`;

  return (
    <S.InfoCardWrapper type={type}>
      {type === 'visited' ? <PatternOne /> : <PatternTwo />}
      <S.Title>{title}</S.Title>
      <S.ValueArea>
        <S.Value>{value === 0 || value === undefined ? '-' : value}</S.Value>
        {type === 'ranking' && <S.Suffix> 위</S.Suffix>}
      </S.ValueArea>
      <S.Notification>자세히 보기 &gt;</S.Notification>
    </S.InfoCardWrapper>
  );
};

export default InfoCard;
