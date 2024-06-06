'use client';

import React, { useState, useEffect } from 'react';
import GameBoard from '@/components/game/GameBoard';

export default function GameContainer() {
    const [secretWord, setSecretWord] = useState<string>('');

    useEffect(() => { 
        const fetchSecretWord = async () => {
            try {
                const response = await fetch('././api/generateWord');
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
    }, []);

    return secretWord ? <GameBoard secretWord={secretWord} /> : <div>Подождите...</div>;
}