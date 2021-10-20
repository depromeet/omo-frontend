import { atom, useRecoilValue } from 'recoil';

interface IUserState {
  isLoggedIn: boolean;
  info?: {
    nickname: string;
    visitedOmakase: number;
    ranking: number;
  };
}

const defaultUserState = {
  isLoggedIn: false,
  info: {
    nickname: '지니지니지니지니',
    visitedOmakase: 12,
    ranking: 2,
  },
};

export const userState = atom<IUserState>({
  key: 'userState',
  default: defaultUserState,
});

export const useUserValue = () => useRecoilValue(userState);
