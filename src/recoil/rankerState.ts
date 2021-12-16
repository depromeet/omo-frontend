import { atomFamily, selectorFamily, useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { isTokenOnHeader, requestRankers } from '@request';
import { IUserReturnType } from '@request/index';

const DEFAULT_RANKING_LIMIT = 10;

export interface IRankerState extends IUserReturnType {
  email: string;
}

const triggerState = atomFamily({
  key: 'triggerState',
  default: Date.now(),
});

const rankerListQuery = selectorFamily({
  key: 'rankerValue',
  get:
    (rankingLimit: number = DEFAULT_RANKING_LIMIT) =>
    async ({ get }) => {
      get(triggerState('userValue'));
      if (!isTokenOnHeader) return;

      try {
        const response = await requestRankers(rankingLimit);
        return response.data;
      } catch (error) {
        if (!(error instanceof Error)) return;
        throw new Error(error.message);
      }
    },
});

export const useRankerListValue = (limit: number = DEFAULT_RANKING_LIMIT) =>
  useRecoilValueLoadable(rankerListQuery(limit));
export const useRefetchRankerList = () => useSetRecoilState(triggerState('rankerValue'));
