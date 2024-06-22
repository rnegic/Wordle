import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";

const ShowKeyboardButton = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <Button
                onClick={handleFocus}
                className='block w-26 lg:hidden'
            >
                Rating
            </Button>
            <input
                ref={inputRef}
                type="text"
                className="absolute -top-full left-full"
                style={{ visibility: 'hidden' }}
                tabIndex={-1}
            />
        </div>
    );
};

export default ShowKeyboardButton;
