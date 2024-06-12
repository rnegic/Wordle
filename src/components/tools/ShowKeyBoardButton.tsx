import React from 'react';
import { Button } from "@/components/ui/button"

const ShowKeyboardButton = () => {
    const handleFocus = () => {

        const tempInput = document.createElement('input');
        tempInput.style.position = 'absolute';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.focus();

        setTimeout(() => {
            document.body.removeChild(tempInput);
        }, 1000);
    };

    return (
        <Button
            onClick={handleFocus}
            className='block md:hidden'
        >
            Show Keyboard
        </Button>
    );
};

export default ShowKeyboardButton;
