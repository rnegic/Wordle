import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between m-5">
            <div>
                <a href="/" >
                    <img src="logo.png" alt="Logo" className="mr-10"/>
                </a>
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
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/signup">Sign up</a>
                    </li>
                    <li>
                        <a href="/signin">Sign in</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;