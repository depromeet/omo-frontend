import Image from 'next/image';

import * as S from './styles';

const MyProfile = () => (
  <S.MyProfileWrapper className="container">
    <S.MyProfileSection>
      <S.ImageWrapper>
        <Image
          src="/images/default_profile_image.png"
          width="66"
          height="66"
          alt="프로필사진"
          className="profile_image"
        />
      </S.ImageWrapper>

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
