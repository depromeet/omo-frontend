import * as S from './styles';

interface HeaderProps {
  title: string;
  align?: string;
}

const MainHeader = ({ title, align }: HeaderProps) => {
  return (
    <S.Header className="container" align={align}>
      <S.Title>{title}</S.Title>
    </S.Header>
  );
};

export default MainHeader;
