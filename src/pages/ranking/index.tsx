// 랭킹 메인 페이지

import Layout from '@components/Layout';

export interface StampListProps {
  id: number;
  name: string;
  count: number;
}

const Ranking = ({ id, name, count }: StampListProps) => {
  return <Layout title="랭킹">랭킹 영역</Layout>;
};

export default Ranking;
