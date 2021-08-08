import React from 'react';

export interface KeyValueProps {
    className?: string;
    label: string;
    value: string;
}

export const KeyValue: React.FC<KeyValueProps> = (props) => {
    const { label, value, className = '' } = props;

    return (
        <div className={`inline-flex items-center text-xs shadow-md rounded-full ${className}`}>
            <div className="bg-indigo-700 text-white py-1 px-2 rounded-l-xl">{label}</div>
            <div className="bg-white text-indigo-700 py-1 px-2 rounded-r-xl">{value}</div>
        </div>
    );
};
