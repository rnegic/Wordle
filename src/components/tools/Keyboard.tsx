import React from 'react';
import { Button } from "@/components/ui/button"

const generateKeyboardEvent = () => {
    const event = new KeyboardEvent('keydown', {
        key: 'æ',
        code: 'KeyAE',
        keyCode: 198,
        bubbles: true,
        cancelable: true,
    });

    document.dispatchEvent(event);
};

const KeyboardButton = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        generateKeyboardEvent();
    };

    return (
        <div className='flex justify-center mt-10'>
            <Button
                onClick={handleClick}
                onKeyDown={(event) => event.key === 'Enter' && event.preventDefault()}
                className='text-2xl size-16'
            >
                æ
            </Button>
        </div>
    );
};

export default KeyboardButton;
