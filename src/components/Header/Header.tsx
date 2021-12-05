import { useRouter } from 'next/router';

import Prev from '@assets/prev.svg';

import * as S from './styles';

interface HeaderProps {
  title?: string;
  backHandler?: () => void;
}

const Header = ({ title, backHandler }: HeaderProps) => {
  const router = useRouter();

  return (
    <S.Header className="container">
      <S.PrevButton onClick={backHandler ?? router.back}>
        <Prev />
      </S.PrevButton>
      {title && <S.Title>{title}</S.Title>}
    </S.Header>
  );
};

export default Header;
