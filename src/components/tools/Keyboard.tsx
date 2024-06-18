import React from 'react';
import { Button } from "@/components/ui/button";

type Language = 'english' | 'russian' | 'ossetian';

interface Layouts {
    english: string[][];
    russian: string[][];
    ossetian: string[][];
}

const layouts: Layouts = {
    english: [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter', 'Backspace']
    ],
    russian: [
        ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
        ['ё', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
        ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'Enter', 'Backspace']
    ],
    ossetian: [
        ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з','х', 'ъ'],
        ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'æ'],
        ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'э'],
        ['Backspace', 'Enter']
    ]
};

const generateKeyboardEvent = (key: string, code: string) => {
    const event = new KeyboardEvent('keydown', {
        key,
        code,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(event);
};

interface KeyboardProps {
    language: Language;
}

const Keyboard = ({ language }: KeyboardProps) => {

    const layout = layouts[language];

    const handleKeyClick = (key: string) => {
        generateKeyboardEvent(key, `Key${key.toUpperCase()}`);
    };

    return (
        <div className='flex flex-col items-center mt-16'>
            {layout.map((row, rowIndex) => (
                <div key={rowIndex} className='flex gap-0.5 my-1 sm:gap-1'>
                    {row.map((key) => (
                        <Button
                            key={key}
                            onClick={() => handleKeyClick(key)}
                            className={`xs:w-4!important xs:text-xs size-6 text-xl sm:size-16 ${key === 'Enter' || key === 'Backspace' ? 'w-12 text-xs sm:w-32 sm:text-lg' : ''}`}
                        >
                            {key === 'Backspace' ? '←' : key.toUpperCase()}
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keyboard;
