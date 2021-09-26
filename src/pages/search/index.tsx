// 기본 찾기 페이지

import styled from 'styled-components';

import Layout from '@components/Layout';
import StoreDisplay from '@components/StoreDisplay';
import { dummys } from '@temp/SearchListDummy';

const Search = () => {
  return (
    <Layout title="오마카세 찾기">
      <SearchPage className="container">
        <SearchBar>
          <input type="text" placeholder="위치 / 가게명을 검색해보세요." />
        </SearchBar>

        {dummys.map((dummy) => (
          <StoreDisplay
            key={dummy.id}
            id={dummy.id}
            image={dummy.image}
            types={dummy.types}
            name={dummy.name}
            desc={dummy.desc}
          />
        ))}
      </SearchPage>
    </Layout>
  );
};

export default Search;

const SearchPage = styled.section``;

const SearchBar = styled.div`
  display: flex;
  border-radius: 24px;
  border: 1px solid #e5e5e5;
  padding: 10px 24px;
  margin-bottom: 1rem;

  input {
    ${({ theme }) => theme.fonts.regular}
    border: none;
    outline: none;
    width: 100%;
  }
`;
