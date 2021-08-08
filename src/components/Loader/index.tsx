import React from 'react';
import './styles.css';

export interface LoaderProps {
    size?: 'tiny' | 'small' | 'normal' | 'large';
    className?: string;
}

const sizes = {
    tiny: 'w-5 h-5',
    small: 'w-8 h-8 ',
    normal: 'w-12 h-12',
    large: 'w-16 h-16',
};

export const Loader: React.FC<LoaderProps> = ({
    size = 'normal',
    className = '',
}) => {
    return <div className={`loader ${sizes[size]} ${className}`}></div>;
};
