import { atom } from 'recoil';

export const selectedReceipt = atom<File | null>({
  key: 'selectedReceipt',
  default: null,
});
