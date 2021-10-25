import Header from '@components/Header';
import Button from '@components/Shared/Button';

import * as S from './styles';

interface Props {
  title: string;
  children: React.ReactNode;
  buttonContent: string;
  clickHandler: () => void;
  disabled?: boolean;
}

const ModalLayout = ({
  title, //
  children,
  buttonContent,
  clickHandler,
  disabled,
}: Props) => (
  <S.Layout>
    <Header title={title} />
    <S.Main>{children}</S.Main>
    <Button
      text={buttonContent}
      clickListener={clickHandler}
      width="calc(100% - 40px)"
      position="absolute"
      left="20px"
      bottom="44px"
      disabled={disabled}
    />
  </S.Layout>
);

export default ModalLayout;
