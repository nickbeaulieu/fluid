import React from 'react';

export interface TextAreaProps
    extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    className?: string;
    textAreaClassName?: string;
    icon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    secondary?: boolean;
    fill?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const {
        icon,
        rightIcon,
        secondary,
        fill,
        className = 'px-3 py-2',
        textAreaClassName = '',
        ...restProps
    } = props;
    return (
        <div
            className={`rounded-md shadow-md bg-white flex items-center text-gray-700 ${
                fill ? '' : 'max-w-sm'
            } ${className}`}
        >
            <textarea
                {...restProps}
                ref={ref}
                className={`flex-1 placeholder-indigo-300 bg-transparent h-24 ${textAreaClassName}`}
            />
        </div>
    );
});
