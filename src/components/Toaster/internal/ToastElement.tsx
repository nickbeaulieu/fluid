import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../../Icon';
import type { HoverFn, Placement } from './types';
import { Noop } from './utils';

// common
export const gutter = 8;

// a11y helper
const A11yText = ({ ...props }) => (
    <span
        style={{
            clip: 'rect(1px, 1px, 1px, 1px)',
            position: 'absolute',
        }}
        className="border-0 h-px w-px absolute whitespace-nowrap p-0 overflow-hidden"
        {...props}
    />
);

// default appearances
type appearance = {
    icon: React.ReactNode;
    text: string;
    fg: string;
    bg: string;
};

const appearances = {
    success: {
        icon: <Icon icon="check-circle" />,
        text: '#064E3B',
        fg: '#059669',
        bg: '#ECFDF5',
    },
    error: {
        icon: <Icon icon="fire" />,
        text: '#7F1D1D',
        fg: '#DC2626',
        bg: '#FEF2F2',
    },
    warning: {
        icon: <Icon icon="bell" />,
        text: '#78350F',
        fg: '#FBBF24',
        bg: '#FFFBEB',
    },
    info: {
        icon: <Icon icon="information-circle" />,
        text: '#312E81',
        fg: '#4F46E5',
        bg: '#EEF2FF',
    },
};
export type AppearanceTypes = 'success' | 'info' | 'warning' | 'error';

const Button = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
    <div
        role="button"
        className="cursor-pointer flex-shrink-0 opacity-50 hover:opacity-100 py-2 px-3 transition-opacity"
        {...props}
    />
);

const Content = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
    <div
        className="flex-grow text-sm py-2 px-3"
        style={{
            lineHeight: 1.4,
            minHeight: 40,
        }}
        {...props}
    />
);

// NOTE: invoke animation when NOT `autoDismiss` with opacity of 0 to avoid a
// paint bug in FireFox.
// https://bugzilla.mozilla.org/show_bug.cgi?id=625289
const Countdown: React.FC<{
    autoDismissTimeout: number;
    isRunning: boolean;
    opacity: number;
}> = ({ autoDismissTimeout, opacity, isRunning, ...props }) => {
    return (
        <div
            className="animate-shrink-height bottom-0 left-0 h-0 absolute w-full"
            style={{
                animationPlayState: isRunning ? 'running' : 'paused',
                backgroundColor: 'rgba(255,255,255,0.3)',
                opacity,
            }}
            {...props}
        />
    );
};

const ToasterIcon: React.FC<{
    appearance: AppearanceTypes;
    autoDismiss: boolean;
    autoDismissTimeout: number;
    isRunning: boolean;
}> = ({ appearance, autoDismiss, autoDismissTimeout, isRunning }) => {
    const meta = appearances[appearance];
    const Glyph = meta.icon;

    return (
        <div
            className="flex-shrink-0 py-2 relative overflow-hidden text-center w-8 rounded-l flex justify-center"
            style={{
                backgroundColor: meta.fg,
                color: meta.bg,
            }}
        >
            {/* @ts-ignore */}
            <Countdown
                opacity={autoDismiss ? 1 : 0}
                autoDismissTimeout={autoDismissTimeout}
                isRunning={isRunning}
            />
            {meta.icon}
        </div>
    );
};

// Transitions
// ------------------------------

function getTranslate(placement: Placement) {
    const pos = placement.split('-');
    const relevantPlacement = (pos[1] === 'center' ? pos[0] : pos[1]) as 'right' | 'left' | 'bottom' | 'top';
    const translateMap = {
        right: 'translate3d(120%, 0, 0)',
        left: 'translate3d(-120%, 0, 0)',
        bottom: 'translate3d(0, 120%, 0)',
        top: 'translate3d(0, -120%, 0)',
    };

    return translateMap[relevantPlacement];
}
export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited';
const toastStates = (placement: Placement) => ({
    entering: { transform: getTranslate(placement) },
    entered: { transform: 'translate3d(0,0,0)' },
    exiting: { transform: 'scale(0.66)', opacity: 0 },
    exited: { transform: 'scale(0.66)', opacity: 0 },
});

const ToastElement: React.FC<ToastProps> = ({
    appearance,
    placement,
    transitionDuration,
    transitionState,
    ...props
}) => {
    const [height, setHeight] = useState('auto');
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (transitionState === 'entered') {
            const el = elementRef.current;
            setHeight(`${el?.offsetHeight ?? 0 + gutter}px`);
        }
        if (transitionState === 'exiting') {
            setHeight('0px');
        }
    }, [transitionState]);

    return (
        <div
            ref={elementRef}
            style={{
                height,
                transition: `height ${transitionDuration - 100}ms 100ms`,
            }}
        >
            <div
                className="w-96 flex rounded shadow-md max-w-full transition-transform"
                style={{
                    // @ts-ignore
                    backgroundColor: appearances[appearance].bg,
                    // @ts-ignore
                    color: appearances[appearance].text,
                    ...toastStates(placement)[transitionState],
                }}
                {...props}
            />
        </div>
    );
};

// ==============================
// DefaultToast
// ==============================

export type ToastProps = {
    appearance: AppearanceTypes;
    autoDismiss: boolean; // may be inherited from ToastProvider
    autoDismissTimeout: number; // inherited from ToastProvider
    children: React.ReactNode;
    isRunning: boolean;
    onDismiss: typeof Noop;
    onMouseEnter: HoverFn;
    onMouseLeave: HoverFn;
    placement: Placement;
    transitionDuration: number; // inherited from ToastProvider
    transitionState: TransitionState; // inherited from ToastProvider
};

export const DefaultToast = ({
    appearance,
    autoDismiss,
    autoDismissTimeout,
    children,
    isRunning,
    onDismiss,
    placement,
    transitionDuration,
    transitionState,
    onMouseEnter,
    onMouseLeave,
    ...otherProps
}: ToastProps) => (
    // @ts-ignore
    <ToastElement
        appearance={appearance}
        placement={placement}
        transitionState={transitionState}
        transitionDuration={transitionDuration}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...otherProps}
    >
        <ToasterIcon
            appearance={appearance}
            isRunning={isRunning}
            autoDismiss={autoDismiss}
            autoDismissTimeout={autoDismissTimeout}
        />
        <Content>{children}</Content>
        {onDismiss ? (
            <Button onClick={onDismiss}>
                <Icon icon="x-circle" />
                <A11yText className="react-toast-notifications__toast__dismiss-text">Close</A11yText>
            </Button>
        ) : null}
    </ToastElement>
);

DefaultToast.defaultProps = {
    onDismiss: Noop,
};
