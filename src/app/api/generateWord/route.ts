import { NextRequest, NextResponse } from 'next/server';
import { randomWord, wordLists } from '../../../lib/words';

export async function GET(req: NextRequest) {
  const language = req.nextUrl.searchParams.get('language') || 'english';
  const wordLength = parseInt(req.nextUrl.searchParams.get('wordLength') || '5', 10);
  const word = randomWord(language as keyof typeof wordLists, wordLength);
  return NextResponse.json({ word });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: 'Not Allowed!' });
}