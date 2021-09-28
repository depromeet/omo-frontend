import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(196, 196, 196, 0.2);
  margin-bottom: 1rem;
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
  font-size: 18px;
  color: #343434;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
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
