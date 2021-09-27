import Header from '@components/Header';

import * as S from './styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

const ModalLayout = (props: Props) => {
  return (
    <S.Layout>
      <Header title={props.title} />
      <S.Main>{props.children}</S.Main>
    </S.Layout>
  );
};

export default ModalLayout;
