import { UNDEF } from '@constants/shared';
import { IUserReturnType } from '@request/index';

import * as S from './styles';

type Props = {
  userValue: IUserReturnType;
};
const MyProfile = ({ userValue }: Props) => {
  const imageURL = `${process.env.API_ENDPOINT}${userValue.profile_url}`;

  return (
    <S.MyProfileWrapper className="container">
      <S.MyProfileSection>
        <S.ImageWrapper>
          <S.ProfileImage src={imageURL} />
        </S.ImageWrapper>

        <S.ProfileInformationWrapper>
          <S.Content>
            <span className="main">
              {userValue.ranking !== UNDEF ? `${userValue.ranking}위` : '-'}
            </span>
            <span className="sub">랭킹</span>
          </S.Content>
          <S.Content>
            <span className="main">
              {userValue.stamp_count !== UNDEF ? `${userValue.stamp_count}번` : '-'}
            </span>
            <span className="sub">도장깼어요</span>
          </S.Content>
          <S.Content>
            <span className="main">
              {userValue.power !== UNDEF ? `Lv.${userValue.power}` : '-'}
            </span>
            <span className="sub">초밥력</span>
          </S.Content>
        </S.ProfileInformationWrapper>
      </S.MyProfileSection>
    </S.MyProfileWrapper>
  );
};

export default MyProfile;
