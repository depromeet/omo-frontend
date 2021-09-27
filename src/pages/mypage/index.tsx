// 마이페이지 메인
import Link from 'next/link';
import styled from 'styled-components';

import MyPageLayout from '@components/Layout/MyPageLayout';
import VisitedStore from '@components/VisitedStore';
import { dummys } from '@temp/VisitedStoreDummy';

const index = () => {
  return (
    <MyPageLayout title="마이페이지">
      <Header>
        <div className="profile">
          <div className="profile-image"></div>
          <div className="profile-content">
            <NickName>지니님</NickName>
            <Stamp>3개</Stamp>
          </div>
        </div>
        <div>
          <Link href="/mypage/settings" passHref>
            <Setting>설정</Setting>
          </Link>
        </div>
      </Header>
      <MyPage>
        <div className="store-list">내 이름님이 다녀간 오마카세 리스트</div>
        {dummys.map((dummy) => (
          <VisitedStore
            key={dummy.id}
            id={dummy.id}
            image={dummy.image}
            name={dummy.name}
            date={dummy.date}
          />
        ))}
      </MyPage>
    </MyPageLayout>
  );
};

export default index;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 150px;
  background-color: #f1f1f1;

  .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .profile-image {
    background-color: #c4c4c4;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  .profile-content {
    display: flex;
    flex-direction: column;
  }
`;

const NickName = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Stamp = styled.h2`
  font-size: 16px;
`;

const Setting = styled.button`
  background-color: #c4c4c4;
  border-radius: 15px;
  border: none;
  padding: 5px 13px; ;
`;

const MyPage = styled.div`
  padding: 1rem;

  .store-list {
    padding: 1rem;
    font-weight: bold;
  }
`;
