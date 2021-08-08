import { Meta } from '@storybook/react';
import React, { FC } from 'react';
import { Confirmation } from '.';
import { useLambda } from '../../hooks/useLambda';
import { Button } from '../Button';

export default {
    title: 'Core/Confirmation',
    component: Confirmation,
} as Meta;

export const Main: FC = (args) => {
    const [visible, setVisible] = useLambda(false);
    const onSelection = (selectedAction: boolean) => {
        console.log('Do action:', selectedAction);
        setVisible(false)();
    };

    return (
        <div className="flex -space-x-2">
            <Button label="toggle alert" onClick={setVisible(true)} />
            <Confirmation
                title="Reassign these bugs?"
                visible={visible}
                onSelection={onSelection}
                height={200}
            >
                Are you sure you want to reassign all of these bugs to Joan Smith? The status will be marked
                as unknown.
            </Confirmation>
        </div>
    );
};

export const Error: FC = (args) => {
    const [visible, setVisible] = useLambda(false);
    const onSelection = (selectedAction: boolean) => {
        console.log('Do action:', selectedAction);
        setVisible(false)();
    };

    return (
        <div className="flex -space-x-2">
            <Button label="toggle alert" onClick={setVisible(true)} intent="destructive" />

            <Confirmation
                title="Are you sure?"
                visible={visible}
                destructive
                onSelection={onSelection}
                height={180}
            >
                Once a session is deleted, it cannot be recovered. Are you certain you'd like to delete this
                session?
            </Confirmation>
        </div>
    );
};
