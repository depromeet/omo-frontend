import { requestMyOmakase } from '@request';
import { selector, useRecoilValueLoadable } from 'recoil';

export interface IMyOmakase {
  create_date: 'string';
  id: number;
  is_certified: boolean;
  name: string;
  photo_url: string;
}

const myOmakaseValue = selector({
  key: 'rankerValue',
  get: async () => {
    try {
      const response = await requestMyOmakase();
      return response.data;
    } catch (error) {
      if (!(error instanceof Error)) return;
      throw new Error(error.message);
    }
  },
});

export const useMyOmakaseRecoilValue = () => useRecoilValueLoadable(myOmakaseValue);
