'use client';

import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface LanguageSelectorProps {
    onLanguageChange: (language: string) => void;
}

const LanguageSelector = ({ onLanguageChange }: LanguageSelectorProps) => {
    const handleChange = (newLanguage: string) => {
        onLanguageChange(newLanguage);
    };

    return (
        <div>
            <Select onValueChange={handleChange}>
                <SelectTrigger className="sm:w-28">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="russian">Russian</SelectItem>
                    <SelectItem value="ossetian">Ossetian</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default LanguageSelector;
