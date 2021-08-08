import React, { FC } from 'react';
export interface ToggleProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    className?: string;
    label: string;
    labelClassName?: string;
}
export declare const Toggle: FC<ToggleProps>;
