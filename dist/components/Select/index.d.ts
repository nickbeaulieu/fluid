import React, { PropsWithChildren } from 'react';
interface SelectCompound {
    Option: React.FC<SelectOptionProps>;
    Separator: React.FC;
}
export interface SelectProps<T = any> extends PropsWithChildren<any> {
    disabled?: boolean;
    className?: string;
    menuClassName?: string;
    onSelect(value?: T): void;
    selected?: string;
}
export declare const Select: React.FC<SelectProps> & SelectCompound;
export interface SelectOptionProps<T = any> {
    className?: string;
    disabled?: boolean;
    value: T;
    label: string;
}
export declare const useSelect: <T>(initialValue: T, cb: (value: T) => void) => {
    readonly selected: T;
    readonly onSelect: (newValue: T) => void;
};
export {};
