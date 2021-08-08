import React from 'react';

export type AppearanceTypes = 'error' | 'info' | 'success' | 'warning';
export type Id = string;
export type Callback = (id: Id) => void;
export type Options = {
    appearance: AppearanceTypes;
    autoDismiss?: boolean;
    onDismiss?: Callback;
    id?: string;
};

export type AddFn = (content: React.ReactNode, options?: Options) => Id;
export type UpdateFn = (id: Id, options: Options) => void;
export type RemoveFn = (id: Id) => void;

export type HoverFn = () => void;

export type Placement =
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-left'
    | 'top-center'
    | 'top-right';

export interface ToastType extends Options {
    appearance: AppearanceTypes;
    content: React.ReactNode;
    id: Id;
}
export type ToastsType = ToastType[];
