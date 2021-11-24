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

const userValue = selector({
  key: 'userValue',
  get: async ({ get }) => {
    get(triggerState('userValue'));
    if (!isTokenOnHeader) return DEFAULT_USER_STATE;

    const { data } = await requestMyInfo();
    return data;
  },
});

export const useFetchUserValue = () => useRecoilValueLoadable(userValue);
export const useRefetchUserValue = () => useSetRecoilState(triggerState('userValue'));
