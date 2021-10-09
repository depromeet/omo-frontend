import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
  color?: string;
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : '100%')};
  padding: 18px;
  color: ${({ color }) => (color ? color : '#000')};
  outline: none;
  border: none;
  border-radius: 8px;
  ${({ theme }) => theme.fonts.subTitle1};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
  border: ${({ bgColor }) => (bgColor ? 'none' : '1px solid #9e9e9e')};
  cursor: pointer;

  & + & {
    margin-top: 14px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black300};
  }
`;
