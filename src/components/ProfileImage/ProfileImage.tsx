/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react';

import * as S from './styles';

interface IProfileImage {
  setProfileImage: (file: File) => void;
  thumbnail?: File;
}

const ProfileImage = ({ thumbnail, setProfileImage }: IProfileImage) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const onChangeProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const file = e.target.files[0];
      setProfileImage(file);
    }
  };

  useEffect(() => {
    if (!thumbnail) return;

    const reader = new FileReader();
    reader.readAsDataURL(thumbnail);
    reader.addEventListener(
      'load',
      () => {
        if (imgRef.current === null || reader.result === null) return;
        imgRef.current.src = reader.result as string;
      },
      false,
    );
  }, [thumbnail]);

  return (
    <S.ProfileImageWrapper className="icon-selector">
      <img src="/default_profile.png" alt="profile" ref={imgRef} />
      <input type="file" accept="image/*, video/*" onChange={onChangeProfileImage} />
    </S.ProfileImageWrapper>
  );
};

export default ProfileImage;
