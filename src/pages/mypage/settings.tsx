import Link from 'next/link';
import styled from 'styled-components';

// 개인정보 설정 페이지
import Layout from '@components/Layout';

const settings = () => {
  return (
    <Layout title="개인정보 설정">
      <SettingSection>로그아웃</SettingSection>
      <SettingSection>회원탈퇴</SettingSection>
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
    </Layout>
  );
};

export default settings;

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
