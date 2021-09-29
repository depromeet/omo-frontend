import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 16px;
  color: #4b4b4b;
  outline: none;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  line-height: 140%;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
  border: ${({ bgColor }) => (bgColor ? 'none' : '1px solid #9e9e9e')};

  & + & {
    margin-top: 14px;
  }
`;
