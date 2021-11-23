import { atom, useRecoilState, useSetRecoilState } from 'recoil';

export interface ISignupFormState {
  email: string;
  nickname: string;
}

const DEFAULT_SIGNUP_FORM = {
  email: '',
  nickname: '',
};

const signupFormState = atom<ISignupFormState>({
  key: 'signupFormState',
  default: DEFAULT_SIGNUP_FORM,
});

export const useSetSignupFormState = () => useSetRecoilState(signupFormState);
export const useSignupFormState = () => useRecoilState(signupFormState);
