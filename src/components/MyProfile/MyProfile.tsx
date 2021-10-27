import useImageReader from '@hooks/useImageReader';
import { IUserState } from '@recoil/userState';

import * as S from './styles';

const MyProfile = (props: { userValue: IUserState }) => {
  const { userValue } = props;
  const imgRef = useImageReader(userValue.info?.profileImage);

  return (
    <S.MyProfileWrapper className="container">
      <S.MyProfileSection>
        <S.ImageWrapper>
          <S.ProfileImage ref={imgRef} />
        </S.ImageWrapper>

        <S.ProfileInformationWrapper>
          <S.Content>
            <span className="main">
              {userValue.info?.ranking ? `${userValue.info?.ranking}위` : '-'}
            </span>
            <span className="sub">랭킹</span>
          </S.Content>
          <S.Content>
            <span className="main">
              {userValue.info?.ranking ? `${userValue.info?.amount}번` : '-'}
            </span>
            <span className="sub">도장깼어요</span>
          </S.Content>
          <S.Content>
            <span className="main">
              {userValue.info?.ranking ? `Lv.${userValue.info?.level}` : '-'}
            </span>
            <span className="sub">초밥력</span>
          </S.Content>
        </S.ProfileInformationWrapper>
      </S.MyProfileSection>
    </S.MyProfileWrapper>
  );
};

export default MyProfile;
