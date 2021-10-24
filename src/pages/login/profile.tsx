import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import LoginLayout from '@components/Layout/LoginLayout';
import ProfileImage from '@components/ProfileImage';
import Button from '@components/Shared/Button';
import { useSignupFormState } from '@recoil/signupFormState';
import { useSetUserState } from '@recoil/userState';

const Profile = () => {
  const router = useRouter();
  const setUserState = useSetUserState();
  const [signupFormState, setSingupFormState] = useSignupFormState();
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  const setProfileImage = (profileImage: File) => {
    setSingupFormState((prev) => ({ ...prev, profileImage }));
  };

  const successLoggedIn = () => {
    if (isValidForm) {
      setUserState({ isLoggedIn: true, info: { ...signupFormState, amount: 0, level: 0 } });
      // API Call
      router.push('/');
    }
  };

  useEffect(() => {
    setIsValidForm(signupFormState.profileImage !== undefined);
  }, [signupFormState]);

  return (
    <LoginLayout>
      <Content>
        <div className="notify-main-letter">좋아요!</div>
        <div className="notify-sub-letter">
          <span className="nickname">{signupFormState.nickname}</span>님을 대표할
        </div>
        <div className="notify-sub-letter">이미지를 골라주세요!</div>

        <ProfileImage setProfileImage={setProfileImage} thumbnail={signupFormState.profileImage} />

        <Button
          text="다음"
          width="calc(100% - 40px)"
          position="absolute"
          left="20px"
          bottom="4rem"
          disabled={!isValidForm}
          clickListener={successLoggedIn}
        />
        <div className="set-next">다음에 할래요</div>
      </Content>
    </LoginLayout>
  );
};

export default Profile;

const Content = styled.div`
  box-sizing: border-box;
  margin-top: 6rem;
  width: 100%;
  color: #000;

  .notify-main-letter {
    margin-left: 20px;
    ${({ theme }) => theme.fonts.header1};
    line-height: 36px;
    margin-bottom: 18px;
  }

  .notify-sub-letter {
    margin-left: 20px;
    ${({ theme }) => theme.fonts.subTitle1};
    font-weight: normal;
    line-height: 28px;

    .nickname {
      font-weight: bold;
    }
  }

  .set-next {
    border: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;

    font-size: 12px;
    text-decoration-line: underline;
    color: #8c8c95;
  }
`;
