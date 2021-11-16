import { atom, atomFamily, selector, useRecoilValueLoadable, useResetRecoilState } from 'recoil';

import { requestMyInfo } from '@request';

export interface IUserState {
  isLoggedIn: boolean;
  info?: {
    nickname?: string;
    stamp_count?: number;
    level?: number;
    ranking?: number;
    profileImage?: File;
    power?: number;
  };
}

const defaultUserState: IUserState = {
  isLoggedIn: false,
  info: {
    nickname: '',
    stamp_count: 0,
    power: 0,
    ranking: 0,
  },
};

export const userState = atom<IUserState>({
  key: 'userState',
  default: defaultUserState,
});

const triggerState = atomFamily({
  key: 'triggerState',
  default: Date.now(),
});

const userSelector = selector({
  key: 'userSelector',
  get: async ({ get }) => {
    get(triggerState('userSelector'));

    try {
      const { data } = await requestMyInfo();
      return { isLoggedIn: true, info: data };
    } catch (error) {
      if (!(error instanceof Error)) return;
      throw new Error(error.message);
    }
  },
  set: ({ set }) => set(triggerState('userSelector'), Date.now()),
});

export const useUserRecoilValue = () => useRecoilValueLoadable(userSelector);
export const useSetTriggerState = () => useResetRecoilState(userSelector);
