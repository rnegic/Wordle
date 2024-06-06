import { NextRequest, NextResponse } from 'next/server';
import englishWords from 'an-array-of-english-words';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { guess } = body;
    const isValid = englishWords.includes(guess.toLowerCase());
    
    return NextResponse.json({ isValid });
};

export const GET = (req: NextRequest, res: NextResponse) => {
    return NextResponse.json({ message: 'Not Allowed!' });
};

