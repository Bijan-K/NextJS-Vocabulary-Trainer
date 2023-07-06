const words = require('./data.json');

export default function handler(req, res) {
  if (req.method == 'GET') {
    res.status(200).json(words);
  } else {
    res.status(405).json({ message: 'no' });
  }
}
