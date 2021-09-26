import BottomNav from '@components/BottomNav';
import Header from '@components/Header';

import * as S from './styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <S.Layout>
      <Header title={props.title} />
      <S.Main>{props.children}</S.Main>
      <BottomNav />
    </S.Layout>
  );
};

export default Layout;
