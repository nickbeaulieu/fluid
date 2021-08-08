import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Flex, FlexProps } from '.';
import { Icon } from '../Icon';

export default {
    title: 'Utilities/Flex',
    component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => (
    <div className="space-y-4">
        <Flex {...args}>
            <Icon icon="bell" />
            <div>example text</div>
        </Flex>
    </div>
);

export const Example = Template.bind({});
Example.args = {
    between: false,
    center: true,
    grow: false,
    shrink: true,
};
