import React, { useState } from 'react';

interface CellProps {
    value: string;
    onChange: (value: string) => void;
}

const Cell = ({ value, onChange }: CellProps) => {
    const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }; 

    return (
        <div className="bg-slate-800">
            <input type="text" value={value} onChange={InputChange} className=" bg-slate-800 h-28 border-4 border-solid
                                                                                border-slate-300 rounded-lg p-4"
            />
        </div>
    );
};

export default Cell;