import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from '.';

export default {
    title: 'Core/Text',
    component: Text,
} as Meta;

export const Main: Story<TextProps> = (args) => (
    <div className="w-52">
        <Text {...args}>
            Here is some really long text that will overflow after 200px or
            so...
        </Text>
    </div>
);
