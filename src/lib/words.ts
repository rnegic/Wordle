import englishWords from 'an-array-of-english-words';

export const randomWord = () => {
  const index = Math.floor(Math.random() * englishWords.length);
  return englishWords[index];
};