import Image from 'next/image';

import { STAMP_BUTTON_VALUE, STAMP_TITLE_NO_STAMP, STAMP_TITLE_SUFFIX } from '@constants/home';

import * as S from './styles';

interface IOmakaseStampCard {
  nickname?: string;
  level?: number;
}

const OmakaseStampCard = ({ nickname, level }: IOmakaseStampCard) => {
  const stampAmount = level && level >= 4 ? 20 : 10;
  const rankingAreaArray = new Array(stampAmount).fill(null);

  return (
    <S.OmakaseStampCardWrapper>
      <S.TitleArea>
        {!level && STAMP_TITLE_NO_STAMP}
        {level && (
          <>
            <span>
              <b>{nickname}</b> {STAMP_TITLE_SUFFIX}
            </span>
            <S.LevelArea>LV.{level}</S.LevelArea>
          </>
        )}
      </S.TitleArea>
      <S.Division />
      <S.StampArea>
        {rankingAreaArray.map((_, idx) => (
          <S.Stamp key={idx}>{stampInnerText(idx)}</S.Stamp>
        ))}
      </S.StampArea>
      <S.StampButton>{STAMP_BUTTON_VALUE}</S.StampButton>
    </S.OmakaseStampCardWrapper>
  );
};

const stampInnerText = (index: number) => {
  let returnText;
  switch (index) {
    case 0:
      returnText = <span>LV.1</span>;
      break;
    case 1:
      returnText = <span>LV.2</span>;
      break;
    case 4:
      returnText = <span>LV.3</span>;
      break;
    case 9:
      returnText = <span>LV.4</span>;
      break;
    case 19:
      returnText = <span>LV.5</span>;
      break;
    default:
      returnText = (
        <div>
          <Image src="/images/add.svg" alt="add" width={24} height={24} />
        </div>
      );
      break;
  }
  return returnText;
};

export default OmakaseStampCard;
