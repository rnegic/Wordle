'use client';

import React, { useState, useEffect } from 'react';
import GameBoard from '@/components/game/GameBoard';
import { useLanguage } from '@/context/LanguageContext';

export default function GameContainer() {
  const [secretWord, setSecretWord] = useState<string>('');
  const { language } = useLanguage();

  useEffect(() => {
    const fetchSecretWord = async () => {
      try {
        const response = await fetch(`/api/generateWord?language=${language}`);
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
  }, [language]);

  return (
    <div>
      {secretWord ? <GameBoard secretWord={secretWord} language={language} /> : <div>Подождите...</div>}
    </div>
  );
}
