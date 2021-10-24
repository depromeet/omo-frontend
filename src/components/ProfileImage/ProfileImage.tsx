import Image from 'next/image';

import * as S from './styles';

interface IProfileImage {}

const ProfileImage = () => {
  return (
    <S.ProfileImageWrapper className="icon-selector">
      <Image
        src="/default_profile.png"
        width="200"
        height="200"
        alt="profile"
        className="profile"
      />
      <input type="file" accept="image/*, video/*" />
    </S.ProfileImageWrapper>
  );
};

export default ProfileImage;
