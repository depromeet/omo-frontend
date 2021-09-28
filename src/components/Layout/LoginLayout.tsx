import styled from 'styled-components';

import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const LoginLayout = (props: Props) => {
  return (
    <S.Layout>
      <S.Main>{props.children}</S.Main>
      <NextPageButton>다음</NextPageButton>
    </S.Layout>
  );
};

export default LoginLayout;

const NextPageButton = styled.button`
  border: none;
  position: absolute;
  left: 20px;
  bottom: 3rem;
  width: calc(100% - 40px);
  height: 48px;
  margin: 0 auto;
  background-color: #d7d8dd;
  border-radius: 8px;
`;
