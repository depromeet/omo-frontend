import styled from 'styled-components';

export const SearchPage = styled.section``;

export const SearchBar = styled.div`
  display: flex;
  border-radius: 24px;
  border: 1px solid #e5e5e5;
  padding: 10px 24px;
  margin-bottom: 1rem;

  input {
    ${({ theme }) => theme.fonts.regular}
    border: none;
    outline: none;
  }
`;
