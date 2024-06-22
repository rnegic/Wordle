'use client';

import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface WordLengthSelectorProps {
    onWordLengthChange: (length: number) => void;
}

const WordLengthSelector = ({ onWordLengthChange }: WordLengthSelectorProps) => {
    const handleChange = (value: string) => {
        const length = parseInt(value, 10);
        onWordLengthChange(length);
    };

    return (
        <div>
            <Select onValueChange={handleChange}>
                <SelectTrigger className="w-10 sm:w-28">
                    <SelectValue placeholder="Letters" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default WordLengthSelector;
