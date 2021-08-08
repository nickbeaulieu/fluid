import { Meta } from '@storybook/react';
import React, { FC } from 'react';
import { Alert } from '.';
import { useToggle } from '../../hooks/useToggle';
import { Button } from '../Button';

export default {
    title: 'Core/Alert',
    component: Alert,
} as Meta;

export const Main: FC = (args) => {
    const [visible, setVisible] = useToggle(false);
    return (
        <div className="flex -space-x-2">
            <Button label="toggle alert" onClick={setVisible} />
            <Alert title="Warning: Information missing" visible={visible} onClose={setVisible} height={200}>
                There is a new way of doing things. You don't appear to be set up for this yet. Please
                navigate to settings so you can enable the thing you need.
            </Alert>
        </div>
    );
};

export const Error: FC = (args) => {
    const [visible, setVisible] = useToggle(false);
    return (
        <div className="flex -space-x-2">
            <Button label="toggle alert" onClick={setVisible} intent="destructive" />
            <Alert title="Error connecting to Service" visible={visible} onClose={setVisible} height={180}>
                Can't connect to Service right now. Please try again in a few minutes.
            </Alert>
        </div>
    );
};
