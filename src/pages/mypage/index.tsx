// 마이페이지 메인
import Link from 'next/link';

import MyPageLayout from '@components/Layout/MyPageLayout';
import VisitedStore from '@components/VisitedStore';
import { dummys } from '@temp/VisitedStoreDummy';

import * as S from './styles';

const index = () => {
  return (
    <MyPageLayout title="마이페이지">
      <S.Header>
        <div className="profile">
          <div className="profile-image"></div>
          <div className="profile-content">
            <S.NickName>지니님</S.NickName>
            <S.Stamp>3개</S.Stamp>
          </div>
        </div>
        <div>
          <Link href="/mypage/settings" passHref>
            <S.Setting>설정</S.Setting>
          </Link>
        </div>
      </S.Header>
      <S.MyPage>
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
      </S.MyPage>
    </MyPageLayout>
  );
};

export default index;
