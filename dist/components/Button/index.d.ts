import React from 'react';
import { Icons } from '../Icon/types';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    intent?: 'primary' | 'secondary' | 'destructive';
    disabled?: boolean;
    label: string;
    icon?: Icons;
    rightIcon?: Icons;
    small?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
