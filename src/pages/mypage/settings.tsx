import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { requestError } from '@@types/shared';
import Header from '@components/Header';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '@constants/error';
import { requestLogout } from '@request';
import { showAlertModal } from '@utils/modal';

const Settings = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await requestLogout();
      //TODO: access token 날려야함
      //TODO: 새로고침할 때도 token 정보를 유지하도록 수정해야함 -> localStorage?
      showAlertModal('로그아웃 되었습니다.');
    } catch (error) {
      const { response } = error as requestError;
      if (!response) return showAlertModal(NETWORK_ERROR);

      return showAlertModal(UNKNOWN_ERROR);
    }
  };

  return (
    <>
      <Header title="개인정보 설정" />
      <SettingSection onClick={handleLogOut}>
        <Link href="/" passHref>
          <a className="setting-link">로그아웃</a>
        </Link>
      </SettingSection>
      <SettingSection>
        <Link href="/mypage/signout" passHref>
          <a className="setting-link">회원 탈퇴</a>
        </Link>
      </SettingSection>
      <SettingSection>
        <Link href="/mypage/changeNickName" passHref>
          <a className="setting-link">닉네임 변경</a>
        </Link>
      </SettingSection>
      <SettingSection>
        <Link href="/mypage/changePhoto" passHref>
          <a className="setting-link">프로필사진 변경</a>
        </Link>
      </SettingSection>
    </>
  );
};

export default Settings;

const SettingSection = styled.section`
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 55px;
  padding: 0 21px;
  border-bottom: 1px solid rgba(196, 196, 196, 0.2);
  text-decoration: none;

  .setting-link {
    text-decoration: none;
    color: #000;
  }
`;
