import { nanoid } from 'nanoid';
import React, { Component, ComponentType, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Transition, TransitionGroup, TransitionStatus } from 'react-transition-group';
import { ToastContainer, ToastContainerProps } from './ToastContainer';
import { ToastController } from './ToastController';
import { DefaultToast, ToastProps, TransitionState } from './ToastElement';
import type {
    AddFn,
    Callback,
    Id,
    Options,
    Placement,
    RemoveFn,
    ToastsType,
    ToastType,
    UpdateFn,
} from './types';
import { Noop } from './utils';

const defaultComponents = { Toast: DefaultToast, ToastContainer };

const ToastContext = React.createContext<Context>({
    // @ts-ignore
    add: Noop,
    remove: Noop,
    removeAll: Noop,
    toasts: [],
    update: Noop,
});
const { Provider } = ToastContext;

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Provider
// ==============================

type Components = {
    Toast: ComponentType<ToastProps>;
    ToastContainer: ComponentType<ToastContainerProps>;
};
type IProps = {
    // A convenience prop; the time until a toast will be dismissed automatically, in milliseconds.
    // Note that specifying this will override any defaults set on individual children Toasts.
    autoDismissTimeout: number;
    // Whether or not to dismiss the toast automatically after `autoDismissTimeout`.
    autoDismiss: boolean;
    // Unrelated app content
    children: React.ReactNode;
    // Component replacement object
    components: Components;
    // Where, in relation to the viewport, to place the toasts
    placement: Placement;
    // Which element to attach the container's portal to, defaults to the `body`.
    portalTargetSelector?: string;
    // A convenience prop; the duration of the toast transition, in milliseconds.
    // Note that specifying this will override any defaults set on individual children Toasts.
    transitionDuration: number;
};
type State = { toasts: ToastType[] };
type Context = {
    add: AddFn;
    remove: RemoveFn;
    removeAll: () => void;
    update: UpdateFn;
    toasts: ToastsType;
};

export class ToastProvider extends Component<IProps, State> {
    static defaultProps = {
        autoDismiss: false,
        autoDismissTimeout: 5000,
        components: defaultComponents,
        placement: 'top-right',
        transitionDuration: 220,
    };

    public readonly state = { toasts: [] };

    // Internal Helpers
    // ------------------------------

    has = (id: string) => {
        if (!this.state.toasts.length) {
            return false;
        }

        // @ts-ignore
        return Boolean(this.state.toasts.filter((t) => t.id === id).length);
    };
    onDismiss = (id: Id, cb: Callback = Noop) => () => {
        cb(id);
        this.remove(id);
    };

    // Public API
    // ------------------------------

    add = (content: React.ReactNode, options?: Options, cb: Callback = Noop) => {
        const id = options?.id ? options.id : nanoid();
        const callback = () => cb(id);

        // bail if a toast exists with this ID
        if (this.has(id)) {
            return;
        }

        // update the toast stack
        // @ts-ignore
        this.setState((state) => {
            const newToast = { content, id, ...options };
            const toasts = [...state.toasts, newToast];

            return { toasts };
        }, callback);

        // consumer may want to do something with the generated ID (and not use the callback)
        return id;
    };
    remove = (id: Id, cb: Callback = Noop) => {
        const callback = () => cb(id);

        // bail if NO toasts exists with this ID
        if (!this.has(id)) {
            return;
        }

        this.setState((state) => {
            const toasts = state.toasts.filter((t) => t.id !== id);
            return { toasts };
        }, callback);
    };
    removeAll = () => {
        if (!this.state.toasts.length) {
            return;
        }

        // @ts-ignore
        this.state.toasts.forEach((t) => this.remove(t.id));
    };
    update = (id: Id, options?: Options, cb: Callback = Noop) => {
        const callback = () => cb(id);

        // bail if NO toasts exists with this ID
        if (!this.has(id)) {
            return;
        }

        // update the toast stack
        this.setState((state) => {
            const old = state.toasts;
            const i = old.findIndex((t) => t.id === id);
            const updatedToast = { ...old[i], ...options };
            const toasts = [...old.slice(0, i), updatedToast, ...old.slice(i + 1)];

            return { toasts };
        }, callback);
    };

    render() {
        const {
            autoDismiss: inheritedAutoDismiss,
            autoDismissTimeout,
            children,
            components,
            placement,
            portalTargetSelector,
            transitionDuration,
        } = this.props;
        const { Toast, ToastContainer } = {
            ...defaultComponents,
            ...components,
        };
        const { add, remove, removeAll, update } = this;
        const toasts = Object.freeze(this.state.toasts);

        const hasToasts = Boolean(toasts.length);
        const portalTarget = canUseDOM
            ? portalTargetSelector
                ? document.querySelector(portalTargetSelector)
                : document.body
            : null; // appease flow

        return (
            //@ts-ignore
            <Provider value={{ add, remove, removeAll, update, toasts }}>
                {children}

                {portalTarget ? (
                    createPortal(
                        <ToastContainer hasToasts={hasToasts}>
                            <TransitionGroup component={null}>
                                {toasts.map(({ appearance, autoDismiss, content, id, onDismiss }) => (
                                    <Transition
                                        appear
                                        key={id}
                                        mountOnEnter
                                        timeout={transitionDuration}
                                        unmountOnExit
                                    >
                                        {(transitionState: TransitionStatus) => (
                                            <ToastController
                                                appearance={appearance}
                                                autoDismiss={
                                                    autoDismiss !== undefined
                                                        ? autoDismiss
                                                        : inheritedAutoDismiss
                                                }
                                                autoDismissTimeout={autoDismissTimeout}
                                                component={Toast}
                                                key={id}
                                                onDismiss={this.onDismiss(id, onDismiss)}
                                                placement={placement}
                                                transitionDuration={transitionDuration}
                                                transitionState={transitionState as TransitionState}
                                            >
                                                {content}
                                            </ToastController>
                                        )}
                                    </Transition>
                                ))}
                            </TransitionGroup>
                        </ToastContainer>,
                        portalTarget,
                    )
                ) : (
                    <ToastContainer hasToasts={hasToasts} />
                )}
            </Provider>
        );
    }
}

export const useToasts = () => {
    const ctx = useContext(ToastContext);

    if (!ctx) {
        throw Error('The `useToasts` hook must be called from a descendent of the `ToastProvider`.');
    }

    return {
        addToast: ctx.add,
        removeToast: ctx.remove,
        removeAllToasts: ctx.removeAll,
        updateToast: ctx.update,
        toastStack: ctx.toasts,
    };
};

export const ToastConsumer = ToastContext.Consumer;
