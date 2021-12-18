import { useRouter } from 'next/router';
import Add from '@assets/add.svg';
import { STAMP_BUTTON_VALUE, STAMP_TITLE_NO_STAMP, STAMP_TITLE_SUFFIX } from '@constants/home';

import * as S from './styles';
import { IMyOmakase } from '@recoil/myOmakaseState';

interface IOmakaseStampCard {
  nickname?: string;
  level?: number;
  stampCount: number;
  myOmakases: IMyOmakase[];
}

const OmakaseStampCard = ({ nickname, level, stampCount, myOmakases }: IOmakaseStampCard) => {
  const { push } = useRouter();
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
          <S.Stamp key={idx}>
            {stampCount >= idx + 1 && myOmakases[idx] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`${process.env.API_ENDPOINT}${myOmakases[idx].photo_url}`}
                alt="photo"
                style={{ borderRadius: '50%' }}
              />
            ) : (
              getStampInnerText(idx)
            )}
          </S.Stamp>
        ))}
      </S.StampArea>
      <S.StampButton onClick={() => push('/search')}>{STAMP_BUTTON_VALUE}</S.StampButton>
    </S.OmakaseStampCardWrapper>
  );
};

const getStampInnerText = (index: number) => {
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
          <Add />
        </div>
      );
      break;
  }
  return returnText;
};

export default OmakaseStampCard;
