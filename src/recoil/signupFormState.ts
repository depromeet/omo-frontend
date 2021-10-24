import { atom, useRecoilState, useSetRecoilState } from 'recoil';

interface ISingupFormState {
  nickname: string;
  profileImage?: File;
}

const DEFAULT_SIGNUP_FORM = {
  nickname: '',
};

export const signupFormState = atom<ISingupFormState>({
  key: 'signupFormState',
  default: DEFAULT_SIGNUP_FORM,
});

export const useSetSignupFormState = () => useSetRecoilState(signupFormState);
export const useSignupFormState = () => useRecoilState(signupFormState);
