import type { NextApiRequest, NextApiResponse } from 'next';
import englishWords from 'an-array-of-english-words';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { guess } = req.body;
        const isValid = englishWords.includes(guess.toLowerCase());
        
        res.status(200).json({ isValid });
    } else {
        res.status(405).json({ message: 'Not Allowed' });
    }
}
