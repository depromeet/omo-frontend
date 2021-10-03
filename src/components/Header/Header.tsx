import { useRouter } from 'next/router';

import Prev from '@assets/prev.svg';

import * as S from './styles';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <S.Header className="container">
      <S.PrevButton onClick={() => router.back()}>
        <Prev />
      </S.PrevButton>
      <S.Title>{title}</S.Title>
    </S.Header>
  );
};

export default Header;
