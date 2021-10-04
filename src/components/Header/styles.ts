import styled from 'styled-components';

interface HeaderProps {
  align?: string;
}

export const Header = styled.header<HeaderProps>`
  position: relative;
  height: 67px;
  display: flex;
  justify-content: ${({ align }) => align ?? 'center'};
  align-items: center;
`;

export const MyPageHeader = styled(Header)`
  background-color: #f1f1f1;
  border: none;
  margin-bottom: 0;
`;

export const PrevButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  left: 21px;
  margin-top: 3px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black800};
  ${({ theme }) => theme.fonts.subTitle1};
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
  border: none;
  outline: none;
  padding: 0 40px;
`;

export const SearchButton = styled(PrevButton)`
  left: unset;
  right: 21px;
  margin: 0;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 140%;
`;
