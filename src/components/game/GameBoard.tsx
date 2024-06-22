import React, { useEffect, useState } from 'react';
import Cell from '@/components/game/Cell';
import Win from '../modals/Win';

interface GameBoardProps {
    secretWord: string;
    language: string;
    wordLength: number;
}

const GameBoard = ({ secretWord, language, wordLength }: GameBoardProps) => {
    const [guesses, setGuesses] = useState<string[][]>([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [isInvalidWord, setIsInvalidWord] = useState(false);
    const [isWinModalOpen, setIsWinModalOpen] = useState(false);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            submitGuess();
        }
        else if (/^[a-zA-Zа-яА-ЯæÆ]$/.test(event.key) && currentGuess.length < wordLength) {
            setCurrentGuess(word => word + event.key.toUpperCase());
        }

        else if (event.key === 'Backspace') {
            setCurrentGuess(word => word.slice(0, -1));
        }
    };

    const checkWin = () => {
        if (currentGuess === secretWord) {
            setIsWinModalOpen(true);
        }
    };

    const submitGuess = async () => {

        if (currentGuess.length !== secretWord.length) return;

        if (language === 'ossetian') {
            checkWin();
            setGuesses(prevGuesses => [...prevGuesses, currentGuess.split('')]);
            setCurrentGuess('');
        }

        else {
            const response = await fetch('././api/checkWord', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ guess: currentGuess, language })
            });

            const result = await response.json();

            if (result.isValid) {
                checkWin();
                setGuesses(prevGuesses => [...prevGuesses, currentGuess.split('')]);
                setCurrentGuess('');
            } else {
                setIsInvalidWord(true);
                setTimeout(() => setIsInvalidWord(false), 1000);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentGuess]);

    useEffect(() => {
        setGuesses([]);
        setCurrentGuess('');
    }, [language, wordLength]);

    const getCellStatus = (row: number, col: number) => {
        const letter = guesses[row][col];
        if (!letter) return undefined;

        if (secretWord[col] === letter) return 'correct';
        if (secretWord.includes(letter)) return 'present';
        return 'absent';
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                {guesses.map((row, rowIdx) => (
                    <div key={rowIdx} className="flex sm:gap-3 justify-center">
                        {row.map((col, colIdx) => (
                            <Cell key={colIdx} value={col} status={getCellStatus(rowIdx, colIdx)} />
                        ))}
                    </div>
                ))}
                <div className="flex justify-center sm:gap-3">
                    {Array.from({ length: secretWord.length }).map((_, idx) => (
                        <Cell key={idx} value={currentGuess[idx] || ''} />
                    ))}
                </div>
                {isInvalidWord && <div className="text-red-500 text-lg flex justify-center">Invalid word!</div>}
            </div>

            <Win
                isOpen={isWinModalOpen}
                onClose={() => setIsWinModalOpen(false)}
            />
        </>
    );
};

export default GameBoard;