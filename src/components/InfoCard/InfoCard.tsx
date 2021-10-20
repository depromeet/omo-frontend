import Image from 'next/image';

import { InfoCardType } from '@@types/home';

import * as S from './styles';

interface IInfoCard {
  type: InfoCardType;
  value?: number;
}

const InfoCard = ({ type, value }: IInfoCard) => {
  const src = `/images/infocard-${type}.svg`;
  const title = type === 'visited' ? `내가 다녀간\n오마카세` : `나의 오마카세\n랭킹`;

  return (
    <S.InfoCardWrapper>
      <Image src={src} width={160} height={186} alt="info-card" />
      <S.Title>{title}</S.Title>
      <S.ValueArea>
        <S.Value>{value}</S.Value>
        {type === 'ranking' && <S.Suffix>위</S.Suffix>}
      </S.ValueArea>
      <S.Notification>자세히 보기 &gt;</S.Notification>
    </S.InfoCardWrapper>
  );
};

export default InfoCard;
