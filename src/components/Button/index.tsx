import React from 'react';
import { Icon } from '../Icon';
import { Icons } from '../Icon/types';

export interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    intent?: 'primary' | 'secondary' | 'destructive';
    disabled?: boolean;
    label: string;
    icon?: Icons;
    rightIcon?: Icons;
    small?: boolean;
}

const styles = {
    primary: (disabled: boolean) =>
        `bg-indigo-700 ${!disabled ? 'hover:bg-indigo-600 active:bg-indigo-800' : ''}`,
    secondary: (disabled: boolean) =>
        `bg-white ${!disabled ? 'hover:bg-indigo-50 active:bg-indigo-100 border-indigo-300 border' : ''}`,
    destructive: (disabled: boolean) =>
        `bg-red-600  ${!disabled ? 'hover:bg-red-500 active:bg-red-700' : ''}`,
};

export const Button: React.FC<ButtonProps> = ({
    intent = 'primary',
    disabled = false,
    label,
    icon,
    rightIcon,
    small = false,
    className = '',
    ...restProps
}) => {
    return (
        <button
            className={`transition-colors box-border ${
                small ? 'py-0.5 px-2 rounded text-md' : 'px-3 rounded-md py-1'
            }  flex items-center shadow-md ${styles[intent](disabled)} ${
                disabled ? 'cursor-not-allowed opacity-50' : ''
            } ${className}`}
            disabled={disabled}
            {...restProps}
        >
            {icon && (
                <span
                    className={`-ml-1 mr-1 inline-block ${
                        intent === 'secondary' ? 'text-indigo-700' : 'text-gray-50'
                    }`}
                >
                    <Icon icon={icon} />
                </span>
            )}
            <span
                className={`text-md font-thin m-auto ${
                    intent === 'secondary' ? 'text-indigo-700' : 'text-gray-50'
                }`}
            >
                {label}
            </span>
            {rightIcon && (
                <span
                    className={`ml-1 -mr-1 inline-block ${
                        intent === 'secondary' ? 'text-indigo-700' : 'text-gray-50'
                    }`}
                >
                    <Icon icon={rightIcon} />
                </span>
            )}
        </button>
    );
};
