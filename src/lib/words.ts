import englishWords from 'an-array-of-english-words';
import ossetianWords from './ossetianWords';
import russianWords from 'russian-words';

interface WordLists {
  english: string[];
  russian: string[];
  ossetian: string[];
}

const russianWordsArray: string[] = russianWords;

export const wordLists: WordLists = {
  english: englishWords,
  russian: russianWordsArray,
  ossetian: ossetianWords,
}

export const randomWord = (language: keyof WordLists, wordLength: number): string => {
  const words = wordLists[language].filter(word => word.length === wordLength);
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};