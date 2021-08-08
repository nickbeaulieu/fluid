import React, { PropsWithChildren } from 'react';
export interface SuggestProps<T = any> extends PropsWithChildren<any> {
    disabled?: boolean;
    className?: string;
    menuClassName?: string;
    onSelect(value?: T): void;
    onValueChange?(value: string): void;
    showLoader?: boolean;
}
export declare const Suggest: {
    <T extends {
        id: any;
    }>(props: SuggestProps<T>): JSX.Element;
    Option: <T_1 extends {
        id: any;
    }>(props: SuggestOptionProps<T_1>) => JSX.Element;
    Separator: React.FC<{}>;
};
export interface SuggestOptionProps<T extends {
    id: any;
}> {
    className?: string;
    disabled?: boolean;
    highlight?: boolean;
    label: string;
    value: T;
}
export declare const useSuggest: <T>(cb: (value: T) => void, valueCb?: ((value: string) => void) | undefined) => {
    readonly onSelect: (newValue: T) => void;
    readonly onValueChange: (newValue: any) => void | undefined;
};
