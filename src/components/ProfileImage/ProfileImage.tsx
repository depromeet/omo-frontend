/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react';

import ProfileEraseImage from '@assets/profile-erase-image.svg';
import { UNDEF } from '@constants/shared';

import * as S from './styles';

interface IProfileImage {
  setProfileImage: (file: File) => void;
  removeProfileImage: () => void;
  thumbnail?: File;
}

const ProfileImage = ({ thumbnail, removeProfileImage, setProfileImage }: IProfileImage) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const addProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) setProfileImage(e.target.files[0]);
  };

  /**
   * thumbnail이 있을 경우,
   * imgRef의 src 에 해당 thumbnail을 넣어줍니다.
   */
  useEffect(() => {
    if (!thumbnail) return;

    const reader = new FileReader();
    const setImageOnSrc = () => {
      if (imgRef.current === null || reader.result === null) return;
      imgRef.current.src = reader.result as string;
    };

    reader.readAsDataURL(thumbnail);
    reader.addEventListener('load', setImageOnSrc);
  }, [thumbnail]);

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
      {thumbnail === UNDEF && (
        <input type="file" accept="image/*, video/*" onChange={addProfileImage} />
      )}
    </S.ProfileImageWrapper>
  );
};

export default ProfileImage;
