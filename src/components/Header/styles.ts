import styled from 'styled-components';

interface HeaderProps {
  align?: string;
  borderBottom?: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: relative;
  height: 67px;
  display: flex;
  justify-content: ${({ align }) => align ?? 'center'};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `1px solid rgba(196, 196, 196, 0.2)` : 'none'};
  align-items: center;
`;

export const MyPageHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: none;
  margin-bottom: 0;
`;

export const TitleSection = styled.section`
  font-size: 18px;
  font-weight: normal;
  line-height: 25px;

  span {
    ${({ theme }) => theme.fonts.subTitle1};
  }
`;

export const SettingSection = styled.section`
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
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
  color: ${({ theme }) => theme.colors.black900};
  ${({ theme }) => theme.fonts.subTitle1};
  font-weight: 500;
  line-height: 22px;
`;

export const Input = styled.input`
  width: 100%;
  ${({ theme }) => theme.fonts.contents1};
  color: ${({ theme }) => theme.colors.black500};
  border: none;
  outline: none;
  padding: 0 40px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black500};
  }
`;

export const SearchButton = styled(PrevButton)`
  left: unset;
  right: 20px;
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.fonts.contents2};
`;
