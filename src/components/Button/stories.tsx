import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '.';
import { useLambda } from '../../hooks/useLambda';
import { FocusCheck } from '../FocusCheck';

export default {
    title: 'Core/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} onClick={() => console.log('clicked')} />;

export const Controls = Template.bind({});
Controls.args = {
    label: 'Create card',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
    label: 'Search',
    icon: 'search',
};

export const RightIcon = Template.bind({});
RightIcon.args = {
    label: 'Download',
    rightIcon: 'download',
    intent: 'secondary',
};

export const Destructive = Template.bind({});
Destructive.args = {
    label: 'Destroy',
    rightIcon: 'x',
    intent: 'destructive',
};

export const BothIcons: React.FC = () => {
    const [isOpen, setIsOpen] = useLambda(false);
    return (
        <div>
            <FocusCheck />
            <Button
                onClick={setIsOpen(!isOpen)}
                label="Choose color"
                icon="duplicate"
                rightIcon="emoji-happy"
            />
        </div>
    );
};
