import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Omnibar, OmnibarProps } from '.';

export default {
    title: 'Core/Omnibar',
    component: Omnibar,
} as Meta;

const Template: Story<OmnibarProps> = (args) => (
    <div>
        <div>press ctrl + k</div>
        <Omnibar {...args} />
    </div>
);

export const Controls = Template.bind({});
Controls.args = {};
