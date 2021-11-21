import { atom, selector, useRecoilValueLoadable } from 'recoil';

import { requestRankers } from '@request';

const rankingLimit = 10;

export interface IRankerState {
  ranking: number;
  nickname: string;
  stampCount: number;
  profileUrl: string | null;
}

const defaultRankerState: IRankerState = {
  ranking: 0,
  nickname: '',
  stampCount: 0,
  profileUrl: null,
};

export const rankerState = atom<IRankerState>({
  key: 'rankerState',
  default: defaultRankerState,
});

export const rankerAsyncState = selector({
  key: 'rankerAsyncState',
  get: async () => {
    try {
      const response = await requestRankers(rankingLimit);
      console.dir(response);
      return response.data;
    } catch (error) {
      if (!(error instanceof Error)) return;
      throw new Error(error.message);
    }
  },
});

export const useRankerRecoilValue = () => useRecoilValueLoadable(rankerAsyncState);
