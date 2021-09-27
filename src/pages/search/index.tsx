// 기본 찾기 페이지

import Link from 'next/link';
import styled from 'styled-components';

import Layout from '@components/Layout';
import StoreDisplay from '@components/StoreDisplay';
import { dummys } from '@temp/SearchListDummy';

const Search = () => {
  return (
    <Layout title="오마카세 찾기">
      <SearchPage className="container">
        <Link href="/search/searching" passHref>
          <a>
            <SearchBar>
              <span>위치 / 가게명을 검색해보세요.</span>
            </SearchBar>
          </a>
        </Link>

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

const SearchPage = styled.section`
  a {
    text-decoration: none;
  }
`;

const SearchBar = styled.div`
  display: flex;
  border-radius: 24px;
  border: 1px solid #e5e5e5;
  padding: 10px 24px;
  margin-bottom: 1rem;

  span {
    ${({ theme }) => theme.fonts.regular}
    width: 100%;
    color: #989898;
    padding: 5px 0;
  }
`;
