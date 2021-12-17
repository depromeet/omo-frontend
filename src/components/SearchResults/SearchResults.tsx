import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from 'recoil';

import useIntersection from '@/hooks/useIntersection';
import SearchNoData from '@components/SearchNoData';
import { LoadingSpinner } from '@components/Shared/Loading';
import { StoreDisplayList, StoreDisplayWide } from '@components/StoreDisplay';
import { DEFAULT_IMAGE_LIST_URL, DEFAULT_IMAGE_WIDE_URL, OMAKASE_SIZE } from '@constants/omakase';
import {
  Omakases,
  currentOmakaseList,
  omakaseEachPageState,
  omakaseKeywordState,
  omakaseLevelState,
} from '@recoil/omakaseState';
import { requestOmakases } from '@request';

import * as S from './styles';

type Mode = 'wide' | 'list';
const ISSERVER = typeof window === 'undefined';

const SearchResults = () => {
  const menuMode = ISSERVER ? 'wide' : (localStorage.getItem('menu-mode') as Mode);
  const [loading, setLoading] = useState(false);
  const [intersectingSection, setIntersectingSection] = useState<HTMLDivElement>();
  const level = useRecoilValue(omakaseLevelState);
  const keyword = useRecoilValue(omakaseKeywordState);
  const [pages, setPages] = useRecoilState(omakaseEachPageState);
  const [omakaseList, setOmakaseList] = useRecoilStateLoadable(
    currentOmakaseList({ page: 0, size: OMAKASE_SIZE, level }),
  );
  const [stopApiCall, setStopApiCall] = useState(false);
  const entry = useIntersection(intersectingSection, { rootMargin: '10px' });
  const isIntersecting = !!entry?.isIntersecting;

  const handleCallbackIntersectingRef = useCallback((node: HTMLDivElement) => {
    setIntersectingSection(node);
  }, []);

  const handleFetchMoreData = async () => {
    if (stopApiCall) return;

    const page = pages[level];
    setLoading(true);

    try {
      const response = await requestOmakases({
        page: page + 1,
        size: OMAKASE_SIZE,
        level,
        keyword,
      });
      const { omakases } = response.data;

      if (omakases.length < OMAKASE_SIZE) setStopApiCall(true);

      setPages((prev) => ({ ...prev, [level]: page + 1 }));
      setOmakaseList((prev) => [...prev, ...omakases]);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isIntersecting) {
      handleFetchMoreData();
    }
  }, [isIntersecting]);

  useEffect(() => {
    const searchWithKeyword = async () => {
      const response = await requestOmakases({ page: 0, size: OMAKASE_SIZE, level, keyword });
      const { omakases } = response.data;
      setOmakaseList(omakases);
    };
    searchWithKeyword();
  }, [keyword, level]);

  if (omakaseList.state === 'loading') return <LoadingSpinner />;

  return (
    <S.SearchResults>
      {omakaseList.contents.length > 0 ? (
        <>
          {omakaseList.contents.map((omakase: Omakases) =>
            menuMode === 'wide' ? (
              <StoreDisplayWide
                key={omakase.id}
                id={omakase.id}
                image_url={omakase.image_url}
                level={omakase.level}
                county={omakase.county}
                name={omakase.name}
                address={omakase.address}
              />
            ) : (
              <StoreDisplayList
                key={omakase.id}
                id={omakase.id}
                image_url={omakase.image_url}
                level={omakase.level}
                county={omakase.county}
                name={omakase.name}
                address={omakase.address}
              />
            ),
          )}
          <S.LoadingSection ref={handleCallbackIntersectingRef}>
            {loading && <LoadingSpinner />}
          </S.LoadingSection>
        </>
      ) : (
        <S.NoDataWrapper>
          <SearchNoData keyword="현재 찾을 수 있는 가게가 없어요" />
        </S.NoDataWrapper>
      )}
    </S.SearchResults>
  );
};

export default SearchResults;
