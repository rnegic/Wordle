'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WordLengthContextProps {
    wordLength: number;
    setWordLength: React.Dispatch<React.SetStateAction<number>>;
}

const WordLengthContext = createContext<WordLengthContextProps | undefined>(undefined);

export const WordLengthProvider = ({ children }: { children: ReactNode }) => {
    const [wordLength, setWordLength] = useState<number>(5);
    return (
        <WordLengthContext.Provider value={{ wordLength, setWordLength }}>
            {children}
        </WordLengthContext.Provider>
    );
};

export const useWordLength = () => {
    const context = useContext(WordLengthContext);
    if (!context) {
        throw new Error('useWordLength can only be used within a WordLengthProvider');
    }
    return context;
};