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
                className='block lg:hidden'
            >
                Show Keyboard
            </Button>
            <input 
                ref={inputRef} 
                type="text" 
                className="absolute opacity-0 size-0" 
                style={{ zIndex: -1 }} 
                tabIndex={-1}
            />
        </div>
    );
};

export default ShowKeyboardButton;
