import { selector, useRecoilValueLoadable } from 'recoil';

import { requestRankers } from '@request';

const rankingLimit = 10;

export interface IRankerState {
  ranking: number;
  nickname: string;
  stampCount: number;
  profileUrl: string | null;
  power: number;
  email: string;
}

const rankerValue = selector({
  key: 'rankerValue',
  get: async () => {
    try {
      const response = await requestRankers(rankingLimit);
      return response.data;
    } catch (error) {
      if (!(error instanceof Error)) return;
      throw new Error(error.message);
    }
  },
});

export const useRankerRecoilValue = () => useRecoilValueLoadable(rankerValue);
