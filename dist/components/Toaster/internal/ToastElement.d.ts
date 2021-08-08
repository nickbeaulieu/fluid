import React from 'react';
import type { HoverFn, Placement } from './types';
import { Noop } from './utils';
export declare const borderRadius = 4;
export declare const gutter = 8;
export declare const toastWidth = 360;
export declare const shrinkKeyframes: import("@emotion/serialize").Keyframes;
export declare type AppearanceTypes = 'success' | 'info' | 'warning' | 'error';
export declare type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited';
export declare type ToastProps = {
    appearance: AppearanceTypes;
    autoDismiss: boolean;
    autoDismissTimeout: number;
    children: React.ReactNode;
    isRunning: boolean;
    onDismiss: typeof Noop;
    onMouseEnter: HoverFn;
    onMouseLeave: HoverFn;
    placement: Placement;
    transitionDuration: number;
    transitionState: TransitionState;
};
export declare const DefaultToast: {
    ({ appearance, autoDismiss, autoDismissTimeout, children, isRunning, onDismiss, placement, transitionDuration, transitionState, onMouseEnter, onMouseLeave, ...otherProps }: ToastProps): JSX.Element;
    defaultProps: {
        onDismiss: () => void;
    };
};
