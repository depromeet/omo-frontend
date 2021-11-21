import { atomFamily, selector, useRecoilValueLoadable, useSetRecoilState } from 'recoil';

import { isTokenOnHeader, requestMyInfo } from '@request';

const DEFAULT_USER_STATE = {
  nickname: '',
  profile_url: '',
  stamp_count: 0,
  ranking: 0,
  power: 0,
};

const triggerState = atomFamily({
  key: 'triggerState',
  default: Date.now(),
});

export const userSelector = selector({
  key: 'userSelector',
  get: async ({ get }) => {
    get(triggerState('userSelector'));
    if (!isTokenOnHeader) return DEFAULT_USER_STATE;

    const { data } = await requestMyInfo();
    return data;
  },
});

export const useFetchUserValue = () => useRecoilValueLoadable(userSelector);
export const useRefetchUserValue = () => useSetRecoilState(triggerState('userSelector'));
