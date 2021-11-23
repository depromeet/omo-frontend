import { atom, selector, useRecoilValueLoadable } from 'recoil';

import { requestRankers } from '@request';
import { IUserReturnType } from '@request/index';

const rankingLimit = 10;

export interface IRankerState extends IUserReturnType {
  email: string;
}

const defaultRankerState: IRankerState = {
  ranking: 0,
  nickname: '',
  stamp_count: 0,
  profile_url: '/images/default-profile.png',
  power: 1,
  email: '',
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
