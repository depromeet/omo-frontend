import styled from 'styled-components';

import MyPageLayout from '@components/Layout/MyPageLayout';
import MyProfile from '@components/MyProfile';
import VisitedStore from '@components/VisitedStore';
import { useFetchUserValue } from '@recoil/userState';
import { dummys } from '@temp/VisitedStoreDummy';

const MyPage = () => {
  const { contents: userValue } = useFetchUserValue();

  return (
    <MyPageLayout>
      <MyProfile userValue={userValue} />
      <MyPagePage className="container">
        <div className="store-list-title">
          <span>{userValue.nickname}</span>님의 오마카세 리스트
        </div>
        <div className="store-list-layout">
          {dummys.map((user) => (
            <VisitedStore
              key={user.id}
              id={user.id}
              name={user.name}
              photo_url={user.photo_url}
              county={user.county}
              create_date={user.create_date}
              is_certificated={user.is_certificated}
            />
          ))}
          {/* {userValue.map((user) => (
            <VisitedStore
              key={user.id}
              id={user.id}
              name={user.name}
              photo_url={user.photo_url}
              county={user.county}
              create_date={user.create_date}
              is_certificated={user.is_certificated}
            />
          ))} */}
        </div>
      </MyPagePage>
    </MyPageLayout>
  );
};

export default MyPage;

const MyPagePage = styled.div`
  .store-list-title {
    ${({ theme }) => theme.fonts.subTitle1};
    margin-bottom: 1.5rem;
  }
  .store-list-layout {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px 15px;
  }
`;
