import { RecoilState, RecoilValueReadOnly, atom, selector } from 'recoil';

const nameState: RecoilState<string> = atom({
  key: 'nameState',
  default: '',
});

const charState: RecoilValueReadOnly<number> = selector({
  key: 'charState',
  get: ({ get }) => {
    const name = get(nameState);
    return name.length;
  },
});

export { nameState, charState };
