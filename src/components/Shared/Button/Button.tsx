import * as S from './styles';

interface ButtonProps {
  text: string;
  bgColor?: string;
  width?: string;
  clickListener: () => void;
}

const Button = ({ text, bgColor, width, clickListener }: ButtonProps) => {
  return (
    <S.Button onClick={clickListener} bgColor={bgColor ? bgColor : ''} width={width ? width : ''}>
      {text}
    </S.Button>
  );
};

export default Button;
