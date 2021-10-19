import Image from 'next/image';

import * as S from './styles';

const MyProfile = () => (
  <S.MyProfileWrapper className="container">
    <S.MyProfileSection>
      <Image
        src="/images/default_profile_image.png"
        width="64"
        height="64"
        alt="프로필사진"
        className="profile_image"
      />
      <S.ProfileInformationWrapper>
        <S.Content>
          <span className="main">25위</span>
          <span className="sub">랭킹</span>
        </S.Content>
        <S.Content>
          <span className="main">6번</span>
          <span className="sub">도장깼어요</span>
        </S.Content>
        <S.Content>
          <span className="main">Lv.1</span>
          <span className="sub">초밥력</span>
        </S.Content>
      </S.ProfileInformationWrapper>
    </S.MyProfileSection>
  </S.MyProfileWrapper>
);

export default MyProfile;
