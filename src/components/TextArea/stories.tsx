import React from 'react';
import { Meta } from '@storybook/react';

import { TextArea, TextAreaProps } from '.';
import { useLambda } from '../../hooks/useLambda';
import { useInput } from '../../hooks/useInput';
import { useTextArea } from '../../hooks/useTextArea';

export default {
    title: 'Core/TextArea',
    component: TextArea,
} as Meta;

export const Primary: React.FC<TextAreaProps> = () => {
    const [value, onChange] = useTextArea('');
    return <TextArea value={value} onChange={onChange} />;
};

export const Fill: React.FC = () => {
    const [value, onChange] = useTextArea('');
    return <TextArea value={value} onChange={onChange} fill={true} />;
};
