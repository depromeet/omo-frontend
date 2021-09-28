import styled from 'styled-components';

const buttonColor: { [key: string]: string } = {
  naver: '#06BE34',
  kakao: '#FEE500',
  apple: '#fff',
};

const fontColor: { [key: string]: string } = {
  naver: '#fff',
  kakao: '#000',
  apple: '#000',
};

export const ButtonWrapper = styled.button<{ buttonType: string }>`
  position: relative;

  border: none;
  width: 100%;
  height: 44px;
  border-radius: 10px;
  background-color: ${({ buttonType }) => buttonColor[buttonType]};

  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: ${({ buttonType }) => fontColor[buttonType]};
  cursor: pointer;

  div {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 15px;
    height: 100%;
  }
`;
