import { nanoid } from 'nanoid';
import React, { FC, useRef } from 'react';
import { Icon } from '../Icon';

export interface CheckboxProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    className?: string;
    label?: string;
    labelClassName?: string;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
    const { className, label, labelClassName, checked, onChange, children, ...otherProps } = props;
    const id = useRef(nanoid()).current;

    return (
        <label className={`flex items-center text-indigo-700 ${className}`} htmlFor={id}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="hidden"
                {...otherProps}
            />
            <div
                className={`w-5 h-5 transition-colors ${
                    checked ? 'border-indigo-500' : 'border-indigo-300'
                } ${
                    checked ? 'text-indigo-700' : 'text-transparent'
                } border rounded-md flex items-center justify-center`}
            >
                <Icon icon="check" />
            </div>
            {label && <span className={`ml-2 ${labelClassName} text-gray-700`}>{label}</span>}
            {!label && !!children && (
                <span className={`ml-2 ${labelClassName} text-gray-700`}>{children}</span>
            )}
        </label>
    );
};
