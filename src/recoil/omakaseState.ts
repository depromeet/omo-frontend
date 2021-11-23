import { DefaultValue, atom, atomFamily, selectorFamily } from 'recoil';

import { requestOmakases, requestSpecificOmakase } from '@request';

export type LEVEL = 'ENTRY' | 'MIDDLE' | 'HIGH';
export type EACH_PAGE = {
  ENTRY: number;
  MIDDLE: number;
  HIGH: number;
};

type PARAMS = {
  level?: LEVEL;
  page?: number;
  size?: number;
  keyword?: string;
};

export interface StoreDisplayProps {
  id: number;
  level: string;
  image_url: string;
  name: string;
  address: string;
  county: string;
}

export interface DetailPageProps extends StoreDisplayProps {
  description: string;
  phone_number: string;
  price_information: string;
  business_hours: string;
  recommendation_count: number;
  is_certification: boolean | null;
  is_recommendation: boolean;
}

export interface Omakases {
  id: number;
  address: string;
  image_url: string;
  level: LEVEL;
  name: string;
  county: string;
}

export interface Omakase extends Omakases {
  is_recommendation: boolean;
  description: string;
  phone_number: string;
  price_information: string;
  business_hours: string;
  recommendation_count: number;
  is_certification: null | boolean;
}

const omakaseIdState = atom<number>({
  key: 'omakaseIdState',
  default: 0,
});

export const omakaseLevelState = atom<LEVEL>({
  key: 'omakaseLevelState',
  default: 'ENTRY',
});

export const omakaseEachPageState = atom<EACH_PAGE>({
  key: 'omakaseEachPageState',
  default: { ENTRY: 0, MIDDLE: 0, HIGH: 0 },
});

export const currentOmakasesListQuery = selectorFamily<Omakases[], PARAMS>({
  key: 'current-omakases-list',
  get: (params: PARAMS) => async () => {
    try {
      const response = await requestOmakases(params);
      const { omakases } = response.data;
      return omakases;
    } catch (error) {
      throw error;
    }
  },
});

export const currentOmakaseList = atomFamily<Omakases[], PARAMS>({
  key: 'currentOmakaseList',
  default: currentOmakasesListQuery,
});

export const currentOmakaseQuery = selectorFamily<Omakase, number>({
  key: 'currentOmakaseQuery',
  get:
    (id: number) =>
    async ({ get }) => {
      get(omakaseIdState);
      try {
        const response = await requestSpecificOmakase(id);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  set:
    (id: number) =>
    ({ set }, value) => {
      if (value instanceof DefaultValue) {
        set(omakaseIdState, (v) => v + id);
      }
    },
});

export const currentOmakaseState = atomFamily<Omakase, number>({
  key: 'currentOmakaseState',
  default: currentOmakaseQuery,
});
