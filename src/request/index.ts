import axios from 'axios';

interface ISignupBody {
  email: string;
  nickname: string;
  image: File;
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

const instance = axios.create({ baseURL: process.env.API_ENDPOINT, withCredentials: true });

export const setTokenOnHeader = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const requestSignup = (body: ISignupBody) => instance.post(`/user`, { body });
export const requestDeleteUser = () => instance.delete(`/user`);
export const requestLogout = () => instance.delete(`/logout`);
export const requestCheckDuplicateName = (name: string) =>
  instance.get(`/user/check?nickname=${name}`);
export const requestOmakases = (param: IRequestOmakasesBody) =>
  instance.get(`/omakases?level=${param.level}&keyword=${param.keyword}`);

export const requestSpecificOmakase = (id: number) => instance.get(`/omakases?/${id}`);
export const requestLike = (id: number) => instance.patch(`/recommendation/${id}`);
export const requestMyRanking = () => instance.get(`/my-ranking`);
export const requestRankers = (limit: number) => instance.get(`/rankers/?limit=${limit}`);
export const requestUserInfo = (email?: string) => instance.get(`/user/${email}`);
export const requestMyOmakase = (email?: string) => instance.get(`/my-omakase/${email}`);
export const requestChangeNickname = (name: string) => instance.patch(`/user/${name}`);
export const requestStamp = (body: IRequestStampBody) => instance.post(`/stamp`, { body });
export const requestUserProfile = () => instance.get(`/user/profile`);
