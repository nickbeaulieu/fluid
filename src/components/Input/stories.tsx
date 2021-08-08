import { Meta } from '@storybook/react';
import React from 'react';
import { Input, InputProps } from '.';
import { useInput } from '../../hooks/useInput';

export default {
    title: 'Core/Input',
    component: Input,
} as Meta;

export const Primary: React.FC<InputProps> = () => {
    const [value, onChange] = useInput('');
    return <Input value={value} onChange={onChange} />;
};

export const Fill: React.FC = () => {
    const [value, onChange] = useInput('');
    return <Input value={value} onChange={onChange} fill={true} />;
};

export const Readonly: React.FC = () => {
    const [value, onChange] = useInput('Something that happened here overflows the container');
    return <Input value={value} onChange={onChange} readOnly={true} />;
};

export const Icon: React.FC = () => {
    const [value, onChange] = useInput('');
    return (
        <Input
            value={value}
            onChange={onChange}
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                </svg>
            }
        />
    );
};

export const SearchWithClear: React.FC = () => {
    const [value, onChange, setValue] = useInput('');
    return (
        <Input
            value={value}
            onChange={onChange}
            placeholder={'find a story...'}
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                </svg>
            }
            rightIcon={
                value && (
                    <svg
                        onClick={setValue('')}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                )
            }
        />
    );
};
