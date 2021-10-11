export interface StoreDisplayProps {
  id: number;
  types: string[];
  image: string;
  name: string;
  location: string;
  desc?: string;
}

export { default } from './StoreDisplay';
export { default as StoreDisplayWide } from './StoreDisplayWide';
export { default as StoreDisplayList } from './StoreDisplayList';
