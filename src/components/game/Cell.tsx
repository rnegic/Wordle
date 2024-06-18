import React from 'react';

interface CellProps {
    value: string;
    status?: 'correct' | 'present' | 'absent';
}

const Cell = ({ value, status }: CellProps) => {
    
    let className = 'flex justify-center size-12 border-1 border-solid border-slate-300 rounded-lg sm:size-20 border-4 p-4';

    if (status === 'correct') {
        className += ' bg-green-500';
    } else if (status === 'present') {
        className += ' bg-yellow-500';
    } else if (status === 'absent') {
        className += ' bg-gray-700';
    } else {
        className += ' bg-slate-800';
    }

    return (
        <div className={className}>
            <span className="text-white font-bold text-base sm:text-3xl">{value.toUpperCase()}</span>
        </div>
    );
};

export default Cell;
