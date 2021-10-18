// 마이페이지 메인
import Link from 'next/link';
import styled from 'styled-components';

import MyPageLayout from '@components/Layout/MyPageLayout';
import MyProfile from '@components/MyProfile';
import VisitedStore from '@components/VisitedStore';
import { dummys } from '@temp/VisitedStoreDummy';

const MyPage = () => {
  return (
    <MyPageLayout>
      <MyProfile />
      <MyPagePage>
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
      </MyPagePage>
    </MyPageLayout>
  );
};

export default MyPage;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 150px;

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

const MyPagePage = styled.div`
  padding: 1rem;

  .store-list {
    padding: 1rem;
    font-weight: bold;
  }
`;
