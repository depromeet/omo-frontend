import { selectorFamily, useRecoilValueLoadable } from 'recoil';

import { requestVisitedOmakase } from '@request';

export const visitedOmakaseValue = selectorFamily({
  key: 'visitedOmakaseValue',
  get: (email?: string) => async () => {
    try {
      const response = await requestVisitedOmakase(email);
      return response.data;
    } catch (error) {
      if (!(error instanceof Error)) return;
      throw new Error(error.message);
    }
  },
});

export const useVisitedOmakaseRecoilValue = (email?: string) =>
  useRecoilValueLoadable(visitedOmakaseValue(email));
