import { nanoid } from 'nanoid';
import React, { Children, Component, ComponentType } from 'react';
import { Transition } from 'react-transition-group';

import type { ToastProps } from './ToastElement';
import { Noop } from './utils';

type Props = Omit<ToastProps, 'isRunning' | 'onMouseEnter' | 'onMouseLeave'> & {
    component: ComponentType<ToastProps>;
};
type State = { isRunning: boolean };

const defaultAutoDismissTimeout = 5000;

type TimerType = {
    clear: typeof Noop;
    pause: typeof Noop;
    resume: typeof Noop;
};

class Timer {
    timerId!: number;
    start: number;
    remaining: number;
    callback: () => void;
    constructor(callback: () => void, delay: number) {
        this.start = delay;
        this.remaining = delay;
        this.callback = callback;
        this.resume();
    }

    clear = () => {
        clearTimeout(this.timerId);
    };

    public pause = () => {
        clearTimeout(this.timerId);
        this.remaining -= Date.now() - this.start;
    };

    public resume = () => {
        this.start = Date.now();
        clearTimeout(this.timerId);
        this.timerId = window.setTimeout(this.callback, this.remaining);
        console.log(this.start, this.timerId);
    };
}

export class ToastController extends Component<Props, State> {
    private timeout!: TimerType;
    state = {
        isRunning: Boolean(this.props.autoDismiss),
    };
    static defaultProps = {
        autoDismiss: true,
    };

    componentDidMount() {
        this.startTimer();
    }
    componentDidUpdate(prevProps: Props) {
        if (prevProps.autoDismiss !== this.props.autoDismiss) {
            const startOrClear = this.props.autoDismiss
                ? this.startTimer
                : this.clearTimer;

            console.log('start or clear');

            startOrClear();
        }
    }
    componentWillUnmount() {
        this.clearTimer();
    }

    startTimer = () => {
        const { autoDismiss, autoDismissTimeout, onDismiss } = this.props;

        if (!autoDismiss) return;

        this.setState({ isRunning: true });
        this.timeout = new Timer(onDismiss, autoDismissTimeout);
    };

    clearTimer = () => {
        if (this.timeout) this.timeout.clear();
    };

    onMouseEnter = () => {
        this.setState({ isRunning: false }, () => {
            if (this.timeout) this.timeout.pause();
        });
    };

    onMouseLeave = () => {
        this.setState({ isRunning: true }, () => {
            if (this.timeout) this.timeout.resume();
        });
    };

    render() {
        const {
            autoDismiss,
            autoDismissTimeout,
            component: Toast,
            ...props
        } = this.props;
        const { isRunning } = this.state;

        // NOTE: conditions here so methods can be clean
        const handleMouseEnter = autoDismiss ? this.onMouseEnter : Noop;
        const handleMouseLeave = autoDismiss ? this.onMouseLeave : Noop;

        return (
            <Toast
                autoDismiss={autoDismiss}
                autoDismissTimeout={autoDismissTimeout}
                {...props}
                isRunning={isRunning}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        );
    }
}
