// components/game/GameContainer.tsx
'use client';

import React, { useState, useEffect } from 'react';
import GameBoard from '@/components/game/GameBoard';
import { useLanguage } from '@/context/LanguageContext';
import { useWordLength } from '@/context/WordLengthContext';
import Keyboard from '../tools/Keyboard';

export default function GameContainer() {
  const [secretWord, setSecretWord] = useState<string>('');
  const { language } = useLanguage();
  const { wordLength } = useWordLength();

  useEffect(() => {
    const fetchSecretWord = async () => {
      try {
        const response = await fetch(`/api/generateWord?language=${language}&wordLength=${wordLength}`);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        setSecretWord(data.word.toUpperCase());
      } catch (error) {
        console.error('Ошибка при загрузке слова:', error);
      }
    };

    fetchSecretWord();
  }, [language, wordLength]);

  return (
    <div>
      {secretWord ? <GameBoard secretWord={secretWord} language={language} wordLength={wordLength}/> : <div className='flex justify-center'>Подождите...</div>}
      <Keyboard language={language as 'english' | 'russian' | 'ossetian'} />
    </div>
  );
}

