import { useRecoilStateLoadable, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import MyPageLayout from '@components/Layout/MyPageLayout';
import MyProfile from '@components/MyProfile';
import VisitedStore from '@components/VisitedStore';
import { useFetchUserValue } from '@recoil/userState';
import { IMyOmakase, useMyOmakaseRecoilValue } from '@recoil/myOmakaseState';
import dayjs from 'dayjs';

const MyPage = () => {
  const { contents: userValue } = useFetchUserValue();
  const { contents, state } = useVisitedOmakaseRecoilValue();

  const {
    contents: { omakases },
  } = useMyOmakaseRecoilValue();

  const replaceDate = (date: IMyOmakase['create_date']) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  };

  return (
    <MyPageLayout>
      <MyProfile userValue={userValue} />
      <MyPagePage className="container">
        <div className="store-list-title">
          <span>{userValue.nickname}</span>님의 오마카세 리스트
        </div>
        <div className="store-list-layout">
          {omakases &&
            omakases.map((omakase: IMyOmakase) => (
              <VisitedStore
                key={omakase.id}
                id={omakase.id}
                image={omakase.photo_url}
                name={omakase.name}
                date={replaceDate(omakase.create_date)}
              />
            ))}
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
