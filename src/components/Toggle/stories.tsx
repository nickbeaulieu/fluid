import { Meta } from '@storybook/react';
import React from 'react';
import { Toggle } from '.';
import { useToggle } from '../../hooks/useToggle';

export default {
    title: 'Core/Toggle',
    component: Toggle,
} as Meta;

export const Main = () => {
    const [checked, toggleChecked] = useToggle(false);
    console.log(checked);
    return (
        <div>
            <Toggle
                checked={checked}
                onChange={(event) => {
                    toggleChecked();
                }}
                label="Check me"
            />
        </div>
    );
};
