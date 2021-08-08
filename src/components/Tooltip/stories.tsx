import { Meta } from '@storybook/react';
import React from 'react';
import { Tooltip } from '.';

export default {
    title: 'Core/Tooltip',
    component: Tooltip,
} as Meta;

export const Main = () => {
    return (
        <span className="">
            <Tooltip>Here is some extra information</Tooltip>
        </span>
    );
};

export const Center = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <Tooltip icon="question-mark-circle">Here is some extra information</Tooltip>
        </div>
    );
};
