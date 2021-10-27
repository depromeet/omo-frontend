import styled from 'styled-components';

import { colors } from '@styles/colors';

interface ButtonProps {
  bgColor?: string;
  color?: string;
  width?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const MAIN_BLUE = colors.mainBlue;

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => width ?? '100%'};
  color: ${({ color }) => color ?? '#fff'};
  background-color: ${({ bgColor }) => bgColor ?? MAIN_BLUE};
  position: ${({ position }) => position ?? 'default'};
  top: ${({ top }) => top ?? 'default'};
  left: ${({ left }) => left ?? 'default'};
  right: ${({ right }) => right ?? 'default'};
  bottom: ${({ bottom }) => bottom ?? 'default'};

  padding: 18px;
  border-radius: 8px;
  ${({ theme }) => theme.fonts.subTitle1};
  border: none;
  outline: none;
  cursor: pointer;

  & + & {
    margin-top: 14px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black300};
  }
`;
