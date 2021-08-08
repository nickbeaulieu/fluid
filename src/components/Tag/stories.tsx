import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tag, TagProps } from '.';
import { Noop } from '../Toaster/internal/utils';

export default {
    title: 'Core/Tag',
    component: Tag,
} as Meta;

const Template: Story<TagProps> = (args) => (
    <Tag {...args} onRemove={() => console.log('remove tag')} />
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Component-UI',
};

export const Multiple = () => {
    return (
        <div className="space-y-4">
            <div className="w-64 space-x-1 space-y-1">
                <Tag
                    label="Component-Platform"
                    onRemove={Noop}
                    className="ml-1"
                />
                <Tag label="Component-UI" onRemove={Noop} />
                <Tag label="Type-Bug" onRemove={Noop} />
                <Tag label="Needs Attention" onRemove={Noop} />
            </div>
            <div className="w-64 space-x-1 space-y-1">
                <Tag
                    intent="secondary"
                    label="Component-Platform"
                    onRemove={Noop}
                    className="ml-1"
                />
                <Tag label="Component-UI" onRemove={Noop} intent="secondary" />
                <Tag label="Type-Bug" onRemove={Noop} intent="secondary" />
                <Tag
                    label="Needs Attention"
                    onRemove={Noop}
                    intent="secondary"
                />
            </div>
        </div>
    );
};
