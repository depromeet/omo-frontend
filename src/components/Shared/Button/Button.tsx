import * as S from './styles';

interface ButtonProps {
  text: string;
  bgColor?: string;
  color?: string;
  width?: string;
  disabled?: boolean;
  clickListener: () => void;
}

const Button = ({ text, bgColor, color, width, disabled, clickListener }: ButtonProps) => {
  return (
    <S.Button
      onClick={clickListener}
      bgColor={bgColor}
      width={width}
      color={color}
      disabled={disabled}
    >
      {text}
    </S.Button>
  );
};

export default Button;
