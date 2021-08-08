import React, { FC } from 'react';
export interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    className?: string;
    label?: string;
    labelClassName?: string;
}
export declare const Checkbox: FC<CheckboxProps>;
