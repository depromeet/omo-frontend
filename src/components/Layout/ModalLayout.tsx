import Header from '@components/Header';

import * as S from './styles';

interface Props {
  title: string;
  children: React.ReactNode;
  buttonContent: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ModalLayout = (props: Props) => {
  return (
    <S.Layout>
      <Header title={props.title} />
      <S.Main>{props.children}</S.Main>
      <S.Button onClick={props.clickHandler}>{props.buttonContent}</S.Button>
    </S.Layout>
  );
};

export default ModalLayout;
