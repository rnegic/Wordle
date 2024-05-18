import React from 'react';
import Cell from "./Cell";

interface GameBoardProps {
    guesses: string[][];
    secretWord: string;
    onChange: (row: number, col: number, value: string) => void;
}

const GameBoard = ({ guesses, secretWord, onChange }: GameBoardProps) => {
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
        </div>
    );
};

export default GameBoard;