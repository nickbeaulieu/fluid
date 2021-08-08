import React, { Component, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';
import { useLambda } from '../../hooks/useLambda';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { Noop } from '../Toaster/internal/utils';

interface ISelectContext<T = any> extends Omit<SelectProps<T>, 'className' | 'menuClassName'> {}

const SelectContext = React.createContext<ISelectContext>({ onSelect: Noop });

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

export const Select: React.FC<SelectProps> & SelectCompound = <T,>(props: SelectProps<T>) => {
    const {
        className = 'w-64',
        menuClassName = 'w-64',
        children,
        disabled,
        onSelect: realOnSelect,
        selected,
    } = props;
    const [isOpen, setIsOpen] = useLambda(false);
    const title = children.find((x: Component<SelectOptionProps>) => x.props.value === selected).props.label;
    const onSelect = useCallback(
        (value?: T) => {
            realOnSelect(value);
            setIsOpen(false)();
        },
        [setIsOpen, realOnSelect],
    );
    const values = useMemo(() => ({ disabled, onSelect, selected }), [disabled, onSelect, selected]);
    return (
        <SelectContext.Provider value={values}>
            <Popover
                onClickOutside={setIsOpen(false)}
                content={
                    <div className={`bg-white text-gray-700 rounded-md shadow-md mt-1 ${menuClassName}`}>
                        {children}
                    </div>
                }
                isOpen={isOpen}
            >
                <div
                    className={`rounded-md shadow-md bg-white pl-3 pr-1 py-1 flex items-center justify-between text-gray-700 cursor-pointer ${className} `}
                    onClick={setIsOpen(!isOpen)}
                >
                    <div>{title}</div>
                    <div className="text-indigo-700">
                        <Icon icon="selector" />
                    </div>
                </div>
            </Popover>
        </SelectContext.Provider>
    );
};

const useSelectContext = () => {
    const context = useContext(SelectContext);
    if (!context) {
        throw new Error('Select compound components cannot be rendered outside the Select component');
    }

    return context;
};

export interface SelectOptionProps<T = any> {
    className?: string;
    disabled?: boolean;
    value: T;
    label: string;
}

const Option: React.FC<SelectOptionProps> = (props) => {
    const { disabled, className = '', value, label } = props;
    const context = useSelectContext();
    const isDisabled = context.disabled || disabled;
    const isSelected = context.selected === value;
    return (
        <div
            onClick={() => context.onSelect(value)}
            className={`px-3 py-1 w-full hover:bg-gray-100 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md ${
                !isDisabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-20 pointer-events-none'
            } ${isSelected ? 'bg-gray-50' : ''} ${className}`}
        >
            {label}
        </div>
    );
};

const Separator: React.FC = () => {
    return <div className="border-gray-100 border-b px-1"></div>;
};

Select.Option = Option;
Select.Separator = Separator;

export const useSelect = <T,>(initialValue: T, cb: (value: T) => void) => {
    const [selected, setSelected] = useState(initialValue);
    const onSelect = useCallback((newValue: T) => {
        setSelected(newValue);
        cb(newValue);
    }, []);
    return { selected, onSelect } as const;
};
