import { NextRequest, NextResponse } from 'next/server';
import { wordLists } from '../../../lib/words';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { guess, lang } = body;
    const words = wordLists[lang as keyof typeof wordLists];
    const isValid = words.includes(guess.toLowerCase());
    
    return NextResponse.json({ isValid });
};

export const GET = (req: NextRequest, res: NextResponse) => {
    return NextResponse.json({ message: 'Not Allowed!' });
};