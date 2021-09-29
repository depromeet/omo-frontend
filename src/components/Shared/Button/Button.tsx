import * as S from './styles';

interface ButtonProps {
  text: string;
  bgColor?: string;
  clickListener: () => void;
}

const Button = ({ text, bgColor, clickListener }: ButtonProps) => {
  return (
    <S.Button onClick={clickListener} bgColor={bgColor ? bgColor : ''}>
      {text}
    </S.Button>
  );
};

export default Button;
