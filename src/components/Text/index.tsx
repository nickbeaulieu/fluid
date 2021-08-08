import React from 'react';

export interface TextProps {
    className?: string;
}

export const Text: React.FC<TextProps> = (props) => {
    const { children, className } = props;
    return (
        <div
            className={`text-gray-700 overflow-hidden whitespace-nowrap overflow-ellipsis ${className}`}
        >
            {children}
        </div>
    );
};
