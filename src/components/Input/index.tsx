import React from 'react';

export interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string;
    iconClassName?: string;
    icon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    secondary?: boolean;
    fill?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        icon,
        rightIcon,
        secondary,
        fill,
        className = '',
        iconClassName = '',
        value,
        ...restProps
    } = props;
    return (
        <div
            className={` rounded-md shadow-md bg-white flex items-center text-gray-700 px-3 py-1 ${
                fill ? '' : 'max-w-sm'
            } ${className}`}
        >
            {icon && <span className={`-ml-1 mr-1 inline-block w-6 h-6 ${iconClassName}`}>{icon}</span>}
            <input
                {...restProps}
                value={value}
                className="flex-1 placeholder-gray-300 bg-transparent"
                ref={ref}
            />
            {rightIcon && (
                <span className={`ml-1 -mr-1 inline-block w-6 h-6  ${iconClassName}`}>{rightIcon}</span>
            )}
        </div>
    );
});
