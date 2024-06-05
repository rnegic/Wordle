import type { NextApiRequest, NextApiResponse } from 'next';
import { randomWord } from '../../../lib/words';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const word = randomWord();
    res.status(200).json({ word });
  } else {
    res.status(405).json({ message: 'Not Allowed' });
  }
}