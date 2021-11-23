import axios from 'axios';

import { Omakases } from '@recoil/omakaseState';

interface IRequestOmakasesBody {
  level?: 'HIGH' | 'MIDDLE' | 'ENTRY';
  keyword?: string;
  size?: number;
  page?: number;
}

export interface IResponseOmakases {
  omakases: Omakases[];
  total_elements: number;
}

const instance = axios.create({ baseURL: process.env.API_ENDPOINT });

export const setTokenOnHeader = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const requestSignup = (form: FormData) => instance.post(`/user`, form);
export const requestDeleteUser = () => instance.delete(`/user`);
export const requestLogout = () => instance.delete(`/logout`);
export const requestCheckDuplicateName = (name: string) =>
  instance.get(`/user/check?nickname=${name}`);
export const requestOmakases = (param: IRequestOmakasesBody) => {
  const pageURLSuffix = `?page=${param.page ?? 0}`;
  const sizeURLSuffix = param.size ? `&size=${param.size}` : '';
  const levelURLSuffix = param.level ? `&level=${param.level}` : '';
  const keywordURLSuffix = param.keyword ? `&keyword=${param.keyword}` : '';
  return instance.get<IResponseOmakases>(
    `/omakases${pageURLSuffix}${sizeURLSuffix}${levelURLSuffix}${keywordURLSuffix}`,
  );
};

export const requestSpecificOmakase = (id: number) => instance.get(`/omakase/${id}`);
export const requestLike = (id: number) => instance.patch(`/recommendation/${id}`);
export const requestMyRanking = () => instance.get(`/my-ranking`);
export const requestRankers = (limit?: number) => instance.get(`/rankers/?limit=${limit}`);
export const requestMyInfo = () => instance.get(`/user`);
export const requestUserInfo = (email?: string) => instance.get(`/user/${email}`);
export const requestMyOmakase = (email?: string) => instance.get(`/my-omakase/${email}`);
export const requestChangeNickname = (nickname: string) => instance.patch(`/user`, { nickname });
export const requestStamp = (formData: FormData) =>
  instance.post(`/stamp`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const requestUserProfile = () => instance.get(`/user/profile`);
