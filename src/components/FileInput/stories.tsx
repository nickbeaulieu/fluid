import React from 'react';
import { Story, Meta } from '@storybook/react';

import { FileInput, FileInputProps } from '.';

export default {
    title: 'Core/FileInput',
    component: FileInput,
} as Meta;

export const Main: Story<FileInputProps> = (args) => (
    <div className="">
        <FileInput {...args}></FileInput>
    </div>
);
