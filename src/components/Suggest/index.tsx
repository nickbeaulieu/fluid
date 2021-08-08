import React, { PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { useLambda } from '../../hooks/useLambda';
import { Input } from '../Input';
import { Loader } from '../Loader';
import { Popover } from '../Popover';
import { Noop } from '../Toaster/internal/utils';

interface ISuggestContext<T = any> extends Omit<SuggestProps<T>, 'className' | 'menuClassName'> {}

const SuggestContext = React.createContext<ISuggestContext>({ onSelect: Noop });

export interface SuggestProps<T = any> extends PropsWithChildren<any> {
    disabled?: boolean;
    className?: string;
    menuClassName?: string;
    onSelect(value?: T): void;
    onValueChange?(value: string): void;
    showLoader?: boolean;
}

export const Suggest = <T extends { id: any }>(props: SuggestProps<T>) => {
    const {
        className = 'w-64',
        menuClassName = 'w-64',
        disabled,
        onSelect: realOnSelect,
        showLoader,
        onValueChange,
    } = props;
    let { children } = props;
    const [isOpen, setIsOpen] = useLambda(false);
    const [value, changeValue] = useInput('');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [highlightIdx, setHighlightIdx] = useState(0);
    const onSelect = useCallback(
        (value?: T) => {
            realOnSelect(value);
            setIsOpen(false)();
        },
        [setIsOpen, realOnSelect],
    );
    const onValueChanged = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onValueChange?.(event.target.value);
            changeValue(event);
        },
        [onValueChange],
    );

    const totalOptions: SuggestOptionProps<T>[] = useMemo(
        () =>
            children
                ?.filter((x: any) => Object.keys(x?.props)?.length > 0 && !x?.props?.disabled)
                ?.map((x: any) => x?.props),
        [children],
    );
    const highlightedId = useMemo(
        () => (highlightIdx === 0 ? null : totalOptions[highlightIdx - 1].value.id),
        [highlightIdx, totalOptions],
    );

    const onKeyUp = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'ArrowDown' && highlightIdx < totalOptions.length) {
                setHighlightIdx(highlightIdx + 1);
            } else if (e.key === 'ArrowUp' && highlightIdx > 0) {
                setHighlightIdx(highlightIdx - 1);
            } else if (e.key === 'Enter') {
                onSelect(totalOptions[highlightIdx - 1].value);
                inputRef.current?.blur();
                setHighlightIdx(0);
            }
        },
        [highlightIdx, onSelect, inputRef.current, totalOptions],
    );

    const values = useMemo(() => ({ disabled, onSelect, highlightedId }), [
        disabled,
        onSelect,
        highlightedId,
    ]);

    return (
        <SuggestContext.Provider value={values}>
            <Popover
                onClickOutside={setIsOpen(false)}
                content={
                    <div className={`bg-white text-gray-700 rounded-md shadow-md mt-1 ${menuClassName}`}>
                        {showLoader ? (
                            <div className="flex justify-center items-center h-32">
                                <Loader size="small" />
                            </div>
                        ) : (
                            children
                        )}
                    </div>
                }
                isOpen={isOpen}
            >
                <Input
                    className={className}
                    onFocus={setIsOpen(true)}
                    value={value}
                    onChange={onValueChanged}
                    onKeyUp={onKeyUp}
                    ref={inputRef}
                />
            </Popover>
        </SuggestContext.Provider>
    );
};

const useSuggestContext = <T,>() => {
    const context = useContext(SuggestContext);
    if (!context) {
        throw new Error('Suggest compound components cannot be rendered outside the Suggest component');
    }

    return context;
};

export interface SuggestOptionProps<T extends { id: any }> {
    className?: string;
    disabled?: boolean;
    highlight?: boolean;
    label: string;
    value: T;
}

const Option = <T extends { id: any }>(props: SuggestOptionProps<T>) => {
    const { disabled, className = '', value, label, highlight } = props;
    const context = useSuggestContext<T>();
    const isDisabled = context.disabled || disabled;
    const isHighlighted = context.highlightedId === value.id;
    return (
        <div
            onClick={() => context.onSelect(value)}
            className={`px-3 py-1 w-full hover:bg-gray-100 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md ${
                !isDisabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-20 pointer-events-none'
            } ${isHighlighted ? 'bg-gray-50' : ''} ${className}`}
        >
            {label}
        </div>
    );
};

const Separator: React.FC = () => {
    return <div className="border-gray-100 border-b px-1"></div>;
};

Suggest.Option = Option;
Suggest.Separator = Separator;

export const useSuggest = <T,>(cb: (value: T) => void, valueCb?: (value: string) => void) => {
    const onSelect = useCallback((newValue: T) => cb(newValue), []);
    const onValueChange = useCallback((newValue) => valueCb?.(newValue), []);
    return { onSelect, onValueChange } as const;
};
