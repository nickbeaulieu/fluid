import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Loader, LoaderProps } from '.';
import { Icon } from '../Icon';
import { useLambda } from '../../hooks/useLambda';
import { Popover } from '../Popover';
import { FocusCheck } from '../FocusCheck';

export default {
    title: 'Core/Loader',
    component: Loader,
} as Meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const Controls = Template.bind({});
Controls.args = {
    size: 'normal',
};
