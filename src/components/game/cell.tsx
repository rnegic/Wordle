import React from 'react';

interface CellProps {
    value: string;
    status?: 'correct' | 'present' | 'absent';
}

const Cell = ({ value, status }: CellProps) => {
    let className = 'bg-slate-800 h-28 border-4 border-solid border-slate-300 rounded-lg p-4';
    if (status === 'correct') className += ' bg-green-500';
    if (status === 'present') className += ' bg-yellow-500';
    if (status === 'absent') className += ' bg-gray-700';

    return (
        <div className={className}>
            <span className="text-white font-bold text-3xl">{value.toUpperCase()}</span>
        </div>
    );
};

export default Cell;