import { Meta } from '@storybook/react';
import React from 'react';
import { Checkbox } from '.';
import { useToggle } from '../../hooks/useToggle';

export default {
    title: 'Core/Checkbox',
    component: Checkbox,
} as Meta;

export const Main = () => {
    const [checked, toggleChecked] = useToggle(false);
    return (
        <div>
            <div className="text-indigo-700 mb-5">
                Use a checkbox for forms, where changing the state does not make a network request until it is
                submitted. Prefer a toggle if you want to make the network request immediately.
            </div>
            <Checkbox
                checked={checked}
                onChange={(event) => {
                    toggleChecked();
                }}
                label="Check me"
            />
        </div>
    );
};
