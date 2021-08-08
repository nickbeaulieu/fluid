import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Breadcrumbs, BreadcrumbsProps } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
    title: 'Core/Breadcrumbs',
    component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => (
    <Router>
        <Breadcrumbs {...args} />
    </Router>
);

export const Controls = Template.bind({});
Controls.args = {
    crumbs: [
        { text: 'Contacts' },
        { text: 'Nick Beaulieu', href: '/something' },
        { text: 'Information' },
    ],
};
