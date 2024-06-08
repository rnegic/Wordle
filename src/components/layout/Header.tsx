import React from 'react';
import LanguageSelector from '../tools/LanguageSelector';

const Header = () => {
    return (
        <header className='flex justify-between m-10 h-20'>
            <div className='flex'>
                <a href="/" >
                    <img src="logo.png" alt="Logo" className="mr-10"/>
                </a>
                <LanguageSelector/>
            </div>
            <nav>
                <ul className="flex gap-2 sm:gap-10">
                    <li>
                        <a href="/game">Game</a>
                    </li>
                    <li>
                        <a href="/settings">Settings</a>
                    </li>
                    <li>
                        <a href="/signup">Sign up</a>
                    </li>
                    <li>
                        <a href="/signin">Log in</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;