import { dummys } from '../../../temp/SearchListDummy';

export default function handler(req, res) {
  const { id } = req.query;
  const target = dummys.filter((store) => store.id === +id)[0];
  res.status(200).json({ ...target });
}
