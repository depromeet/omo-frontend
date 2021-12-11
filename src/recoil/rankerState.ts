import { selector, useRecoilValueLoadable } from 'recoil';

import { requestRankers } from '@request';
import { IUserReturnType } from '@request/index';

const rankingLimit = 10;

export interface IRankerState extends IUserReturnType {
  email: string;
}

export const rankerValue = selector({
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
