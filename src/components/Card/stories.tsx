import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Card, CardProps } from '.';
import { Flex } from '../Flex';
import { Text } from '../Text';

export default {
    title: 'Core/Card',
    component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Controls = Template.bind({});
Controls.args = {
    // @ts-ignore
    children: (
        <div>
            Hollo Werld
            <div className="italic text-indigo-400">
                some more content goes here
            </div>
        </div>
    ),
};

export const TwoCardsInAContainer: React.FC = () => (
    <>
        <Text>Two cards in a flex container</Text>
        <Flex className="space-x-3">
            <Card>Here is some info</Card>
            <Card>Here is more info</Card>
        </Flex>
    </>
);
