// 기본 찾기 페이지

import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

import MenuIcon from '@assets/menu.svg';
import SearchIcon from '@assets/search.svg';
import Layout from '@components/Layout';
import StoreDisplay from '@components/StoreDisplay';
import { dummys } from '@temp/SearchListDummy';

const Search = () => {
  const [tab, setTab] = useState('미들');
  const [tempStores, setTempStores] = useState(dummys.filter((dummy) => dummy.types.includes(tab)));

  const handleClickOnTabs = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!(e.target instanceof HTMLSpanElement)) return;

    const content = e.target.textContent as string;
    setTab(content);

    const filteredDummys = dummys.filter((store) => store.types.includes(content));
    setTempStores(filteredDummys);
  };

  return (
    <Layout title="오마카세 찾기">
      <SearchPage className="container">
        <FixedArea>
          <div className="tabs" onClick={(e) => handleClickOnTabs(e)}>
            <span className={`tab ${tab === '미들' ? 'active' : ''}`}>미들</span>
            <span className={`tab ${tab === '하이엔드' ? 'active' : ''}`}>하이엔드</span>
            <span className={`tab ${tab === '캐쥬얼' ? 'active' : ''}`}>캐쥬얼</span>
          </div>

          <Link href="/search/searching" passHref>
            <a>
              <SearchBar>
                <span>이름/지역구를 검색해주세요</span>
                <SearchIcon />
              </SearchBar>
            </a>
          </Link>

          <div className="header-wrapper">
            <h1 className="sub-title">오모의 추천 오마카세</h1>
            <MenuIcon />
          </div>
        </FixedArea>

        <SearchResults>
          {tempStores.map((dummy) => (
            <StoreDisplay
              key={dummy.id}
              id={dummy.id}
              image={dummy.image}
              types={dummy.types}
              name={dummy.name}
              desc={dummy.desc}
            />
          ))}
        </SearchResults>
      </SearchPage>
    </Layout>
  );
};

export default Search;

const SearchPage = styled.section`
  position: relative;
  a {
    text-decoration: none;
  }

  .sub-title {
    ${({ theme }) => theme.fonts.subTitle1};
  }

  .tabs {
    display: flex;
    ${({ theme }) => theme.fonts.subTitle3};
    color: ${({ theme }) => theme.colors.black400};

    .tab {
      margin-right: 10px;
      padding-bottom: 5px;

      &.active {
        color: #000;
        border-bottom: 2px solid ${({ theme }) => theme.colors.pointRed};
      }
    }
  }
`;

const SearchBar = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black100};
  padding: 12px 16px;
  margin: 18.56px auto;
  margin-top: 13.56px;

  span {
    ${({ theme }) => theme.fonts.contents3};
    color: #000;
  }
`;

const FixedArea = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
  padding-bottom: 17.46px;

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 17.46px;
  }
`;

const SearchResults = styled.article`
  display: flex;
  flex-direction: column;
`;
