import { dummys } from './../../../temp/VisitedStoreDummy';

export default function handler(req, res) {
  if (req.method !== 'PATCH') {
    res.status(400).send({ message: 'PATCH 메소드를 사용하시져' });
    return;
  }

  const { id } = req.query;
  const target = dummys.filter((store) => store.id === +id);

  if (!target.length) res.status(404).json({ error: '요청 대상을 찾을 수 없음' });

  res.status(204).json({ success: '좋아요 증가~' });
}
