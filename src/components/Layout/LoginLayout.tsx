import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const LoginLayout = (props: Props) => {
  return (
    <S.Layout>
      <S.PrevIcon />
      <S.Main>{props.children}</S.Main>
    </S.Layout>
  );
};

export default LoginLayout;
