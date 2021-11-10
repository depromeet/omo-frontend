export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'POST 메소드를 사용하시져' });
    return;
  }

  const { omakaseId, receiptIssuaranceData, receiptImage } = req.body;

  if (!omakaseId) res.status(400).json({ error: '타겟 아이디 누락' });
  else if (!receiptIssuaranceData) res.status(400).json({ error: '영수증 날짜 누락' });
  else if (!receiptImage) res.status(400).json({ error: '영수증 이미지 누락' });
  else res.status(204).json({ status: 'success' });
}
