import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { requestError } from '@@types/shared';
import LoginLayout from '@components/Layout/LoginLayout';
import ProfileImage from '@components/ProfileImage';
import Button from '@components/Shared/Button';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '@constants/error';
import { UNDEF } from '@constants/shared';
import { useSignupFormState } from '@recoil/signupFormState';
import { requestSignup } from '@request';
import { showAlertModal } from '@utils/modal';

const Profile = () => {
  const router = useRouter();
  const [signupFormState] = useSignupFormState();
  const [thumbnail, setThumbnail] = useState<File>();

  const handleSignup = async () => {
    if (!thumbnail) return;

    const { email, nickname } = signupFormState;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('nickname', nickname);
    formData.append('image', thumbnail);

    try {
      await requestSignup(formData);
      showAlertModal('회원가입에 성공하였습니다.');
      router.push('/');
    } catch (error) {
      const { response } = error as requestError;
      if (!response) return showAlertModal(NETWORK_ERROR);

      return showAlertModal(UNKNOWN_ERROR);
    }
  };

  return (
    <LoginLayout>
      <Content>
        <div className="notify-main-letter">좋아요!</div>
        <div className="notify-sub-letter">
          <span className="nickname">{signupFormState.nickname}</span>님을 대표할
        </div>
        <div className="notify-sub-letter">이미지를 골라주세요!</div>

        <ProfileImage thumbnail={thumbnail} setThumbnail={setThumbnail} />

        <Button
          text="다음"
          width="calc(100% - 40px)"
          position="absolute"
          left="20px"
          bottom="4rem"
          disabled={thumbnail === UNDEF}
          clickListener={handleSignup}
        />
        <div className="set-next" onClick={handleSignup}>
          다음에 할래요
        </div>
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
