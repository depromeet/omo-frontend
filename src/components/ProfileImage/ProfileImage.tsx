import React, { Dispatch } from 'react';

import ProfileEraseImage from '@assets/profile-erase-image.svg';
import { UNDEF } from '@constants/shared';
import useImageReader from '@hooks/useImageReader';

import * as S from './styles';

interface IProfileImage {
  setThumbnail: Dispatch<File | undefined>;
  thumbnail?: File;
}

const ProfileImage = ({ thumbnail, setThumbnail }: IProfileImage) => {
  const imgRef = useImageReader(thumbnail);

  const addProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) setThumbnail(e.target.files[0]);
  };
  const removeProfileImage = () => setThumbnail(UNDEF);

  return (
    <S.ProfileImageWrapper className="icon-selector">
      <S.Circle />
      <S.DefaultImage />
      {thumbnail !== UNDEF && (
        <>
          <S.CircleAura />
          <S.ProfileImage ref={imgRef} />
          <S.ProfileEraseButton onClick={removeProfileImage}>
            <ProfileEraseImage />
          </S.ProfileEraseButton>
        </>
      )}
      {thumbnail === UNDEF && <input type="file" accept="image/*" onChange={addProfileImage} />}
    </S.ProfileImageWrapper>
  );
};

export default ProfileImage;
