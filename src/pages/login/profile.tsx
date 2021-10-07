import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import SampleImageOne from '@assets/sample/sample-image-one.svg';
import SampleImageTwo from '@assets/sample/sample-image-two.svg';
import LoginLayout from '@components/Layout/LoginLayout';
import { userState } from '@recoil/userState';

const Profile = () => {
  const router = useRouter();

  const setUserState = useSetRecoilState(userState);
  const successLoggedIn = () => {
    setUserState({ isLoggedIn: true, info: { nickname: '안녕안녕나는뚜비야' } });
    router.push('/');
  };

  console.log(setUserState);
  return (
    <LoginLayout>
      <Content>
        <div className="notify-main-letter">좋아요!</div>
        <div className="notify-sub-letter">
          <span className="nickname">오마카세에대출땡기는</span>님을 대표할
        </div>
        <div className="notify-sub-letter">이미지를 골라주세요!</div>

        <div className="icon-selector">
          <SampleImageOne />
          <SampleImageTwo />
          <SampleImageOne />
        </div>

        <button>+ 내 사진으로 할래요</button>
      </Content>

      <ConfirmButton onClick={successLoggedIn}>확인</ConfirmButton>
    </LoginLayout>
  );
};

export default Profile;

const Content = styled.div`
  margin-top: 6rem;
  width: 100%;
  height: 441px;

  button {
    all: unset;
    display: block;
    padding: 15px 25px;
    border: none;
    border-radius: 22px;
    margin: 0 auto;
    font-size: 14px;
    color: #fff;
    background-color: #ffc737;
  }

  .notify-main-letter {
    margin: 0 0 26px 20px;

    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    color: #000;
  }

  .notify-sub-letter {
    margin-left: 20px;
    font-size: 18px;
    line-height: 140%;
    color: #000;

    .nickname {
      font-weight: bold;
    }
  }

  .icon-selector {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 140px;
    margin: 88px 0 56px 0;
  }
`;

const ConfirmButton = styled.button`
  border: none;
  position: absolute;
  left: 20px;
  bottom: 3rem;
  width: calc(100% - 40px);
  height: 48px;

  margin: 0 auto;
  border-radius: 8px;

  background-color: #2334cf;
  color: #fff;

  font-size: 18px;
  font-weight: 700;

  cursor: pointer;
`;
