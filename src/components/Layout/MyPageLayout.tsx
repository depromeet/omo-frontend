import BottomNav from '@components/BottomNav';
import MyPageHeader from '@components/Header/MyPageHeader';

import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const MyPageLayout = (props: Props) => {
  return (
    <S.Layout>
      <MyPageHeader />
      <S.Main>{props.children}</S.Main>
      <BottomNav />
    </S.Layout>
  );
};

export default MyPageLayout;
