import { NextRequest, NextResponse } from 'next/server';
import { randomWord } from '../../../lib/words';

export async function GET(req: NextRequest) {
  const word = randomWord();
  return NextResponse.json({ word });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: 'Not Allowed!' });
}