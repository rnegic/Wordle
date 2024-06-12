'use client';

import React from 'react';
import LanguageSelector from '../tools/LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';
import ShowKeyboardButton from '../tools/ShowKeyBoardButton';

const Header = () => {
    const { setLanguage } = useLanguage();

    return (
        <header className='flex justify-between m-10 h-20'>
            <div className='flex gap-5'>
                <a className='mt-1 font-bold text-xl' href='/'>Wordle</a>
                <LanguageSelector onLanguageChange={setLanguage} />
                <ShowKeyboardButton/>
            </div>
            <nav>
                <ul className="hidden sm:flex gap-5">
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