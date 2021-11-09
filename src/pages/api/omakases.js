import { dummys } from '../../temp/SearchListDummy';

export default function handler(req, res) {
  res.status(200).json({ total_elements: dummys.length, omakases: dummys });
}
