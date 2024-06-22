// components/layout/Header.tsx
'use client';

import React from 'react';
import LanguageSelector from '../tools/LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';
import ShowKeyboardButton from '../tools/ShowKeyBoardButton';
import WordLengthSelector from '../tools/WordLengthSelector';
import { useWordLength } from '../../context/WordLengthContext';

const Header = () => {
    const { setLanguage } = useLanguage();
    const { setWordLength } = useWordLength();

    const handleWordLengthChange = (length: number) => {
        setWordLength(length);
    };

    return (
        <header className='flex justify-center mt-10 h-20 md:justify-between m-10'>
            <div className='flex gap-5'>
                <a className='mt-1 font-bold text-xl' href='/'>Wordle</a>
                <LanguageSelector onLanguageChange={setLanguage} />
                <WordLengthSelector onWordLengthChange={handleWordLengthChange} />
                <ShowKeyboardButton />
            </div>
            <nav>
                <ul className="hidden md:flex gap-5">
                    <li>
                        <a href="/settings">Settings</a>
                    </li>
                    <li>
                        <a href="/signup">Sign up</a>
                    </li>
                    <li>
                        <a href="/login">Log in</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
