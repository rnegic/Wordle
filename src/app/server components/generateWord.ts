'use server'

import { randomWord } from "@/lib/words";

export async function getSecretWord() {
  const secretWord = randomWord();
  return secretWord;
}