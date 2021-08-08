import React from 'react';

export interface CardProps {
    interactive?: boolean;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ interactive = false, className = '', children }) => {
    return (
        <div
            className={`py-3 px-4 bg-white rounded-md shadow-md ${
                interactive ? 'hover:shadow-lg transition-shadow' : ''
            } ${className}`}
        >
            {children}
        </div>
    );
};
