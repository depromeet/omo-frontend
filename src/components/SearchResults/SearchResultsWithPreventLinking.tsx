import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRecoilStateLoadable, useRecoilValue } from 'recoil';

import useIntersection from '@/hooks/useIntersection';
import SearchNoData from '@components/SearchNoData';
import { LoadingSpinner } from '@components/Shared/Loading';
import { StoreDisplayList } from '@components/StoreDisplay';
import { DEFAULT_IMAGE_LIST_URL, OMAKASE_SIZE } from '@constants/omakase';
import PreventLinkAction from '@lib/PreventLinkAction';
import { Omakases, currentOmakaseList, omakaseKeywordState } from '@recoil/omakaseState';
import { requestCheckOmakaseIsCertificated, requestOmakases } from '@request';

import * as S from './styles';

type Props = {
  handleClickOnReselectLocation: () => void;
};

const SearchResultsWithPreventLinking = ({ handleClickOnReselectLocation }: Props) => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [intersectingSection, setIntersectingSection] = useState<HTMLDivElement>();
  const keyword = useRecoilValue(omakaseKeywordState);
  const [omakaseList, setOmakaseList] = useRecoilStateLoadable(
    currentOmakaseList({ page: 0, size: OMAKASE_SIZE }),
  );
  const [stopApiCall, setStopApiCall] = useState(false);
  const entry = useIntersection(intersectingSection, { rootMargin: '10px' });
  const isIntersecting = !!entry?.isIntersecting;

  const handleCallbackIntersectingRef = useCallback((node: HTMLDivElement) => {
    setIntersectingSection(node);
  }, []);

  const handleFetchMoreData = async () => {
    if (stopApiCall) return;

    setLoading(true);

    try {
      const response = await requestOmakases({
        page: page + 1,
        size: OMAKASE_SIZE,
        keyword,
      });
      const { omakases } = response.data;

      if (omakases.length < OMAKASE_SIZE) setStopApiCall(true);

      setPage((prev) => prev + 1);
      setOmakaseList((prev) => [...prev, ...omakases]);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const selectAnotherOmakase = async (id: number) => {
    toast.clearWaitingQueue();

    try {
      await requestCheckOmakaseIsCertificated(id);
      push({ pathname: `/certification`, query: { id } });
      handleClickOnReselectLocation();
    } catch (error) {
      toast.error('이미 인증이 진행중 또는 완료된 오마카세 입니다.', {
        position: 'bottom-center',
        hideProgressBar: true,
        pauseOnHover: false,
        autoClose: 2500,
        theme: 'colored',
        icon: false,
        closeButton: false,
        style: {
          margin: 'auto',
          borderRadius: '10px',
          marginBottom: '20px',
          width: '90%',
          fontSize: '14px',
        },
      });
    }
  };

  useEffect(() => {
    if (isIntersecting) {
      handleFetchMoreData();
    }
  }, [isIntersecting]);

  useEffect(() => {
    const searchWithKeyword = async () => {
      const response = await requestOmakases({ page: 0, size: OMAKASE_SIZE, keyword });
      const { omakases } = response.data;

      if (omakases.length >= OMAKASE_SIZE) {
        setStopApiCall(false);
      }

      setPage(0);
      setOmakaseList(omakases);
    };
    searchWithKeyword();
  }, [keyword]);

  if (omakaseList.state === 'loading') return <LoadingSpinner />;

  return (
    <S.SearchResults>
      {omakaseList.contents.length > 0 ? (
        <>
          {omakaseList.contents.map((omakase: Omakases) => (
            <PreventLinkAction
              key={omakase.id}
              onClickHandler={() => selectAnotherOmakase(omakase.id)}
            >
              <StoreDisplayList
                id={omakase.id}
                image_url={omakase.image_url}
                level={omakase.level}
                county={omakase.county}
                name={omakase.name}
                address={omakase.address}
              />
            </PreventLinkAction>
          ))}
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

export default SearchResultsWithPreventLinking;
