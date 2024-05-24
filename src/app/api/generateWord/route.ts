import type { NextApiRequest, NextApiResponse } from 'next';
import { randomWord } from '../../../lib/words';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(randomWord());
  } else {
    res.status(405).json({ message: 'Now allowed' });
  }
}