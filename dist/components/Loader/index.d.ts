import React from 'react';
import './styles.css';
export interface LoaderProps {
    size?: 'tiny' | 'small' | 'normal' | 'large';
    className?: string;
}
export declare const Loader: React.FC<LoaderProps>;
