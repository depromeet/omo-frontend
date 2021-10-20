import * as S from './styles';

interface IOmakaseStampCard {
  nickname?: string;
  level?: number;
}

const OmakaseStampCard = ({ nickname, level }: IOmakaseStampCard) => {
  const STAMP_TITLE_NO_STAMP = '오마카세 영수증으로 도장깨기를 시작해보세요!';
  const STAMP_TITLE_SUFFIX = '님의 초밥력은?';
  const STAMP_BUTTON_VALUE = '도장깨러가기';

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
        <S.Stamp />
        <S.Stamp />
        <S.Stamp />
        <S.Stamp />
        <S.Stamp />
        <S.Stamp />
        <S.Stamp />
        <S.Stamp />
        <S.Stamp />
        <S.Stamp />
      </S.StampArea>
      <S.StampButton>{STAMP_BUTTON_VALUE}</S.StampButton>
    </S.OmakaseStampCardWrapper>
  );
};

export default OmakaseStampCard;
