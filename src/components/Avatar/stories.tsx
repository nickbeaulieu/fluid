import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from '.';

export default {
    title: 'Core/Avatar',
    component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => (
    <div className="flex -space-x-2">
        <Avatar {...args} ring />
        <Avatar
            {...args}
            src="https://randomuser.me/api/portraits/women/4.jpg"
            ring
        />
        <Avatar
            {...args}
            src="https://randomuser.me/api/portraits/women/3.jpg"
            ring
        />
    </div>
);

export const Controls = Template.bind({});
Controls.args = {
    initials: 'NB',
    size: 'normal',
    src: 'https://randomuser.me/api/portraits/men/12.jpg',
};
