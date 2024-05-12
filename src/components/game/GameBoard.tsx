'use client'

import React, { useState } from 'react';
import Cell from "./Cell";

interface GameBoardProps {
    n: number;
}

const GameBoard = ({ n }: GameBoardProps) => {

    const [guesses, setGuesses] = useState<string[][]>(Array.from({ length: 5 }, () => Array(n).fill('')));

    const CellChange = (row: number, col: number, value: string) => {
        const newGuesses = [...guesses];
        newGuesses[row][col] = value;
        setGuesses(newGuesses);
    };

    return (
        <div className="flex">
            {guesses.map((row, rowIdx) => (
                <div key={rowIdx} className="block">
                    {row.map((col, colIdx) => (
                        <Cell
                            key={colIdx}
                            value={col}
                            onChange={(value) => CellChange(rowIdx, colIdx, value)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;