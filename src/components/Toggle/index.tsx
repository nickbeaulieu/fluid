import React, { FC, useRef } from 'react';
import { nanoid } from 'nanoid';

export interface ToggleProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    className?: string;
    label: string;
    labelClassName?: string;
}

export const Toggle: FC<ToggleProps> = (props) => {
    const {
        className,
        label,
        labelClassName,
        checked,
        onChange,
        ...otherProps
    } = props;
    const id = useRef(nanoid()).current;
    console.log(checked);
    return (
        <label
            className={`flex items-center text-indigo-700 ${className}`}
            htmlFor={id}
        >
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="hidden"
                {...otherProps}
            />
            <div
                className={`w-10 h-6 transition-colors duration-200 ${
                    checked ? 'bg-indigo-600' : 'bg-indigo-200'
                } rounded-full`}
            >
                <div
                    className={`w-5 h-5  shadow-lg bg-white rounded-full m-0.5 transform transition-transform ease-out duration-200 ${
                        checked ? 'translate-x-4 ' : ''
                    }`}
                ></div>
            </div>
            {label && (
                <span className={`ml-2 ${labelClassName} text-gray-700`}>
                    {label}
                </span>
            )}
        </label>
    );
};
