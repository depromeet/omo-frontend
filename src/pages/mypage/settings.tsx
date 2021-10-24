import Link from 'next/link';
import styled from 'styled-components';

// 개인정보 설정 페이지
import Header from '@components/Header';

const Settings = () => {
  return (
    <>
      <Header title="개인정보 설정" />
      <SettingSection onClick={() => alert('로그아웃이 완료되었습니다.')}>로그아웃</SettingSection>
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

const SettingSection = styled.div`
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
