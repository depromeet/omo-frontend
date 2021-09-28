import styled from 'styled-components';

import PlainPrevIcon from '@assets/prev.svg';

import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const LoginLayout = (props: Props) => {
  return (
    <S.Layout>
      <PrevIcon />
      <S.Main>{props.children}</S.Main>
    </S.Layout>
  );
};

export default LoginLayout;

const PrevIcon = styled(PlainPrevIcon)`
  position: absolute;
  top: 2rem;
  left: 1rem;
`;
