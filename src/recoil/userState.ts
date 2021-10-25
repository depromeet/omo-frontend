import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export interface IUserState {
  isLoggedIn: boolean;
  info?: {
    nickname?: string;
    amount?: number;
    level?: number;
    ranking?: number;
    profileImage?: File;
  };
}

// FIXME: 유저 로그인 로직이 연결되면 해당 부분을 수정해주세요!
const defaultUserState = {
  isLoggedIn: false,
  info: {
    nickname: '지니지니지니지니',
    amount: 12,
    level: 2,
    ranking: 2,
  },
};

export const userState = atom<IUserState>({
  key: 'userState',
  default: defaultUserState,
});

export const useUserValue = () => useRecoilValue(userState);
export const useSetUserState = () => useSetRecoilState(userState);
export const useUserState = () => useRecoilState(userState);
