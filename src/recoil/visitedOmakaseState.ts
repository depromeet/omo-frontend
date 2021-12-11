import { selector, useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { requestMyOmakase } from '@request';

import { rankerValue } from './rankerState';

export interface IVisitedOmakaseState {
  id: number;
  name: string;
  photo_url: string;
  county?: string;
  create_date?: string;
  is_certificated?: boolean;
}

const visitedOmakaseValue = selector({
  key: 'visitedOmakaseValue',
  get: async ({ get }) => {
    try {
      const rankerEmail = get(rankerValue);
      const response = await requestMyOmakase();
      const { data } = response.data;
      return response.data;
    } catch (error) {
      if (!(error instanceof Error)) return;
      throw new Error(error.message);
    }
  },
});

export const useVisitedOmakaseRecoilValue = () => useRecoilValueLoadable(visitedOmakaseValue);
