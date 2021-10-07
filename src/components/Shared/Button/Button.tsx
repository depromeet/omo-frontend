import * as S from './styles';

interface ButtonProps {
  text: string;
  bgColor?: string;
  color?: string;
  width?: string;
  clickListener: () => void;
}

const Button = ({ text, bgColor, color, width, clickListener }: ButtonProps) => {
  return (
    <S.Button onClick={clickListener} bgColor={bgColor} width={width} color={color}>
      {text}
    </S.Button>
  );
};

export default Button;
