import { atom } from 'recoil';

interface IUserState {
  isLoggedIn: boolean;
  info?: {
    nickname: string;
  };
}

export const userState = atom<IUserState>({
  key: 'userState',
  default: {
    isLoggedIn: false,
  },
});
