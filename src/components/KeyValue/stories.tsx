import { Meta } from '@storybook/react';
import React from 'react';
import { KeyValue } from '.';

export default {
    title: 'Core/KeyValue',
    component: KeyValue,
} as Meta;

export const Main = () => {
    return (
        <div className="space-y-4">
            <div className="w-64 space-x-1 space-y-1">
                <KeyValue label="OS" value="Windows" />
                <KeyValue label="Browser" value="Chrome" />
                <KeyValue label="Version" value="89.0.234" />
            </div>
        </div>
    );
};
