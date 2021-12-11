import { selector, selectorFamily, useRecoilValue, useRecoilValueLoadable } from 'recoil';

import { requestMyOmakase } from '@request';

export interface IVisitedOmakaseState {
  id: number;
  name: string;
  photo_url: string;
  county?: string;
  create_date?: string;
  is_certificated?: boolean;
}

// export const visitedOmakaseValue = selectorFamily({
//   key: 'visitedOmakaseValue',
//   get: (email: string) => async () => {
//     try {
//       const response = await requestMyOmakase(email);
//       const { omakases } = response.data;
//       return omakases;
//     } catch (error) {
//       if (!(error instanceof Error)) return;
//       throw new Error(error.message);
//     }
//   },
// });
export const visitedOmakaseValue = selector({
  key: 'visitedOmakaseValue',
  get: async () => {
    try {
      const response = await requestMyOmakase('gywls00100@gmail.com');
      return response.data;
    } catch (error) {
      if (!(error instanceof Error)) return;
      throw new Error(error.message);
    }
  },
});
export const useVisitedOmakaseRecoilValue = () => useRecoilValueLoadable(visitedOmakaseValue);
