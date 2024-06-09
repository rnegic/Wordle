import englishWords from 'an-array-of-english-words';
import ossetianWords from './ossetianWords';
//@ts-ignore
import russianWords from 'russian-words';

interface WordLists {
  english: string[];
  russian: string[];
  ossetian: string[];
}

const wordLists: WordLists = {
  english: englishWords,
  russian: russianWords,
  ossetian: ossetianWords,
};

export const randomWord = (language: keyof WordLists): string => {
  const words = wordLists[language];
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};