import { UNDEF } from '@constants/shared';
import useImageReader from '@hooks/useImageReader';
import { IUserState } from '@recoil/userState';

import * as S from './styles';

const MyProfile = (props: { userValue: IUserState }) => {
  const { userValue } = props;
  const info = userValue.info;

  const imgRef = useImageReader(info?.profileImage);

  return (
    <S.MyProfileWrapper className="container">
      <S.MyProfileSection>
        <S.ImageWrapper>
          <S.ProfileImage ref={imgRef} />
        </S.ImageWrapper>

        <S.ProfileInformationWrapper>
          <S.Content>
            <span className="main">{info?.ranking !== UNDEF ? `${info?.ranking}위` : '-'}</span>
            <span className="sub">랭킹</span>
          </S.Content>
          <S.Content>
            <span className="main">
              {info?.stamp_count !== UNDEF ? `${info?.stamp_count}번` : '-'}
            </span>
            <span className="sub">도장깼어요</span>
          </S.Content>
          <S.Content>
            <span className="main">{info?.power !== UNDEF ? `Lv.${info?.power}` : '-'}</span>
            <span className="sub">초밥력</span>
          </S.Content>
        </S.ProfileInformationWrapper>
      </S.MyProfileSection>
    </S.MyProfileWrapper>
  );
};

export default MyProfile;
