import { Meta } from '@storybook/react';
import React from 'react';
import { Select, useSelect } from '.';

export default {
    title: 'Core/Select',
    component: Select,
} as Meta;

export const Main = () => {
    const ownerSelect = useSelect('owners', (value) => {
        console.log(value);
        // make request, whatever
    });
    return (
        <div className="space-y-4">
            <Select {...ownerSelect}>
                <Select.Option value="owners" label="Contact Owners" />
                <Select.Option value="all" label="All Contacts" />
                <Select.Option value="admins" label="Admins" disabled />
                <Select.Separator />
                <Select.Option value="disabled" label="Disable" />
            </Select>
        </div>
    );
};
