'use client';

import React from 'react';
import LanguageSelector from '../tools/LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
    const { setLanguage } = useLanguage();

    return (
        <header className='flex justify-between m-10 h-20'>
            <div className='flex gap-5'>
                <a className='mt-1 font-bold text-xl' href='/'>Wordle</a>
                <LanguageSelector onLanguageChange={setLanguage} />
            </div>
            <nav>
                <ul className="flex gap-2 sm:gap-10">
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