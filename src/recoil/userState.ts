import { atom, useRecoilValue } from 'recoil';

interface IUserState {
  isLoggedIn: boolean;
  info?: {
    nickname: string;
    amount: number;
    ranking: number;
    level: number;
  };
}

// FIXME: 유저 로그인 로직이 연결되면 해당 부분을 수정해주세요!
const defaultUserState = {
  isLoggedIn: false,
  info: {
    nickname: '지니지니지니지니',
    amount: 12,
    ranking: 2,
    level: 2,
  },
};

export const userState = atom<IUserState>({
  key: 'userState',
  default: defaultUserState,
});

export const useUserValue = () => useRecoilValue(userState);
