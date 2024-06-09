import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const LanguageSelector = () => {

    return (
        <div>
            <Select>
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