/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, useEffect, useRef } from 'react';
import { SetterOrUpdater } from 'recoil';

import ProfileEraseImage from '@assets/profile-erase-image.svg';
import { UNDEF } from '@constants/shared';
import { ISignupFormState } from '@recoil/signupFormState';

import * as S from './styles';

interface IProfileImage {
  // setSignupFormState: SetterOrUpdater<ISignupFormState>;
  setThumbnail: Dispatch<File | undefined>;
  thumbnail?: File;
}

const ProfileImage = ({ thumbnail, setThumbnail }: IProfileImage) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const addProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) setThumbnail(e.target.files[0]);
  };
  const removeProfileImage = () => setThumbnail(UNDEF);

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
