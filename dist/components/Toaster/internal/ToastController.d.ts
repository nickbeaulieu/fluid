import { Component, ComponentType } from 'react';
import type { ToastProps } from './ToastElement';
declare type Props = Omit<ToastProps, 'isRunning' | 'onMouseEnter' | 'onMouseLeave'> & {
    component: ComponentType<ToastProps>;
};
declare type State = {
    isRunning: boolean;
};
export declare class ToastController extends Component<Props, State> {
    private timeout;
    state: {
        isRunning: boolean;
    };
    static defaultProps: {
        autoDismiss: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    startTimer: () => void;
    clearTimer: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    render(): JSX.Element;
}
export {};
