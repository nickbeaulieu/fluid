import React, { Component, ComponentType } from 'react';
import { ToastContainerProps } from './ToastContainer';
import { ToastProps } from './ToastElement';
import type { AddFn, Callback, Id, Options, Placement, RemoveFn, ToastsType, ToastType, UpdateFn } from './types';
declare type Components = {
    Toast: ComponentType<ToastProps>;
    ToastContainer: ComponentType<ToastContainerProps>;
};
declare type IProps = {
    autoDismissTimeout: number;
    autoDismiss: boolean;
    children: React.ReactNode;
    components: Components;
    placement: Placement;
    portalTargetSelector?: string;
    transitionDuration: number;
};
declare type State = {
    toasts: ToastType[];
};
declare type Context = {
    add: AddFn;
    remove: RemoveFn;
    removeAll: () => void;
    update: UpdateFn;
    toasts: ToastsType;
};
export declare class ToastProvider extends Component<IProps, State> {
    static defaultProps: {
        autoDismiss: boolean;
        autoDismissTimeout: number;
        components: {
            Toast: {
                ({ appearance, autoDismiss, autoDismissTimeout, children, isRunning, onDismiss, placement, transitionDuration, transitionState, onMouseEnter, onMouseLeave, ...otherProps }: ToastProps): JSX.Element;
                defaultProps: {
                    onDismiss: () => void;
                };
            };
            ToastContainer: React.FC<ToastContainerProps>;
        };
        placement: string;
        transitionDuration: number;
    };
    readonly state: {
        toasts: never[];
    };
    has: (id: string) => boolean;
    onDismiss: (id: Id, cb?: Callback) => () => void;
    add: (content: React.ReactNode, options?: Options | undefined, cb?: Callback) => string | undefined;
    remove: (id: Id, cb?: Callback) => void;
    removeAll: () => void;
    update: (id: Id, options?: Options | undefined, cb?: Callback) => void;
    render(): JSX.Element;
}
export declare const useToasts: () => {
    addToast: AddFn;
    removeToast: RemoveFn;
    removeAllToasts: () => void;
    updateToast: UpdateFn;
    toastStack: ToastsType;
};
export declare const ToastConsumer: React.Consumer<Context>;
export {};
