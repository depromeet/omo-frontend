import { requestMyOmakase } from '@request';
import { atom, selector, useRecoilValueLoadable, useResetRecoilState } from 'recoil';

export interface IMyOmakase {
  create_date: 'string';
  id: number;
  is_certified: boolean;
  name: string;
  photo_url: string;
}

const omakaseIdState = atom<number>({
  key: 'omakaseIdState',
  default: 0,
});

const myOmakaseValue = selector({
  key: 'rankerValue',
  get: async ({ get }) => {
    get(omakaseIdState);
    try {
      const response = await requestMyOmakase();
      return response.data;
    } catch (error) {
      if (!(error instanceof Error)) return;
      throw new Error(error.message);
    }
  },
  set: ({ set }, value) => {
    if (value) {
      set(omakaseIdState, (v) => v + 1);
    }
  },
});

export const useMyOmakaseRecoilValue = () => useRecoilValueLoadable(myOmakaseValue);
export const useRefetchMyOmakases = () => useResetRecoilState(myOmakaseValue);
