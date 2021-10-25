/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react';
import { SetterOrUpdater } from 'recoil';

import ProfileEraseImage from '@assets/profile-erase-image.svg';
import { UNDEF } from '@constants/shared';
import { ISignupFormState } from '@recoil/signupFormState';

import * as S from './styles';

interface IProfileImage {
  setSignupFormState: SetterOrUpdater<ISignupFormState>;
  thumbnail?: File;
}

const ProfileImage = ({ thumbnail, setSignupFormState }: IProfileImage) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const setProfileImage = (profileImage: File) =>
    setSignupFormState((prev) => ({ ...prev, profileImage }));
  const removeProfileImage = () => setSignupFormState((prev) => ({ nickname: prev.nickname }));

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
