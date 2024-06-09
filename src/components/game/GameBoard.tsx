import React, { useEffect, useState } from 'react';
import Cell from "./Cell";

interface GameBoardProps {
    secretWord: string;
}

const GameBoard = ({ secretWord }: GameBoardProps) => {
    const [guesses, setGuesses] = useState<string[][]>([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [isInvalidWord, setIsInvalidWord] = useState(false);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            submitGuess();
        }

        else if (/^[a-zA-Z]$/.test(event.key) && currentGuess.length < secretWord.length) {
            setCurrentGuess(word => word + event.key.toUpperCase());
        }

        else if (event.key === 'Backspace') {
            setCurrentGuess(word => word.slice(0, -1));
        }
    };

    const submitGuess = async () => {

        if (currentGuess.length !== secretWord.length) return;

        const response = await fetch('././api/checkWord', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ guess: currentGuess })
        });

        const result = await response.json();

        if (result.isValid) {
            setGuesses(prevGuesses => [...prevGuesses, currentGuess.split('')]);
            setCurrentGuess('');
        } else {
            setIsInvalidWord(true);
            setTimeout(() => setIsInvalidWord(false), 1000);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentGuess]);

    const getCellStatus = (row: number, col: number) => {
        const letter = guesses[row][col];
        if (!letter) return undefined;

        if (secretWord[col] === letter) return 'correct';
        if (secretWord.includes(letter)) return 'present';
        return 'absent';
    };

    return (
        <div className="flex flex-col gap-4">
            {guesses.map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-4">
                    {row.map((col, colIdx) => (
                        <Cell key={colIdx} value={col} status={getCellStatus(rowIdx, colIdx)} />
                    ))}
                </div>
            ))}
            <div className="flex gap-4">
                {Array.from({ length: secretWord.length }).map((_, idx) => (
                    <Cell key={idx} value={currentGuess[idx] || ''} />
                ))}
            </div>
            {isInvalidWord && <div className="text-red-500 text-lg flex justify-center">Invalid word!</div>}
        </div>
    );
};

export default GameBoard;