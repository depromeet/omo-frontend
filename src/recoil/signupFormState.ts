import { atom, useRecoilState, useSetRecoilState } from 'recoil';

export interface ISignupFormState {
  nickname: string;
  profileImage?: File;
}

const DEFAULT_SIGNUP_FORM = {
  nickname: '',
};

export const signupFormState = atom<ISignupFormState>({
  key: 'signupFormState',
  default: DEFAULT_SIGNUP_FORM,
});

export const useSetSignupFormState = () => useSetRecoilState(signupFormState);
export const useSignupFormState = () => useRecoilState(signupFormState);
