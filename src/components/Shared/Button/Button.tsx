import * as S from './styles';

interface ButtonProps {
  text: string;
  width?: string;
  // Color
  bgColor?: string;
  color?: string;
  //Position
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  // Etc.
  disabled?: boolean;
  clickListener: () => void;
}

const Button = ({
  text,
  width,
  bgColor,
  color,
  position,
  top,
  left,
  right,
  bottom,
  disabled,
  clickListener,
}: ButtonProps) => {
  return (
    <S.Button
      width={width}
      bgColor={bgColor}
      color={color}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      disabled={disabled}
      onClick={clickListener}
    >
      {text}
    </S.Button>
  );
};

export default Button;
