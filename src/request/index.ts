import axios from 'axios';

interface IUserReturnType {
  nickname: string;
  profile_url: string;
  stamp_count: number;
  ranking: number;
  power: number;
}

interface IRequestStampBody {
  omakaseId: number;
  receiptIssuaranceData: string;
  receiptImage: File;
}

interface IRequestOmakasesBody {
  level: 'HIGH' | 'MIDDLE' | 'ENTRY';
  keyword?: string;
}

const instance = axios.create({ baseURL: process.env.API_ENDPOINT });

export let isTokenOnHeader = false;
export const setTokenOnHeader = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  isTokenOnHeader = true;
};

export const requestSignup = (form: FormData) => instance.post(`/user`, form);
export const requestDeleteUser = () => instance.delete(`/user`);
export const requestLogout = () => instance.delete(`/logout`);
export const requestCheckDuplicateName = (name: string) =>
  instance.get(`/user/check?nickname=${name}`);
export const requestOmakases = (param: IRequestOmakasesBody) => {
  const keywordURLSuffix = param.keyword ? `&keyword=${param.keyword}` : '';
  instance.get(`/omakases?level=${param.level}${keywordURLSuffix}`);
};

export const requestSpecificOmakase = (id: number) => instance.get(`/omakases?/${id}`);
export const requestLike = (id: number) => instance.patch(`/recommendation/${id}`);
export const requestMyRanking = () => instance.get(`/my-ranking`);
export const requestRankers = (limit?: number) => instance.get(`/rankers/?limit=${limit}`);
export const requestMyInfo = () => instance.get<IUserReturnType>(`/user`);
export const requestUserInfo = (email?: string) => instance.get(`/user/${email}`);
export const requestMyOmakase = (email?: string) => instance.get(`/my-omakase/${email}`);
export const requestChangeNickname = (nickname: string) => instance.patch(`/user`, { nickname });
export const requestStamp = (body: IRequestStampBody) => instance.post(`/stamp`, { body });
export const requestUserProfile = () => instance.get(`/user/profile`);
