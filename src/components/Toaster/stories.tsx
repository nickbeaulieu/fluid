import { Meta } from '@storybook/react';
import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { ToastProvider, useToasts } from './internal/ToastProvider';

export default {
    title: 'Core/Toaster',
    excludeStories: ['Toaster'],
} as Meta;

export const Provider: React.FC = (props) => {
    return (
        <ToastProvider autoDismiss={true} transitionDuration={220}>
            <Toaster />
        </ToastProvider>
    );
};

export const Toaster: React.FC = () => {
    const { addToast } = useToasts();
    const [autoDismiss, toggleAutodismiss] = useToggle(false);

    return (
        <div className="space-y-3">
            <Checkbox checked={autoDismiss} label="Auto-dismiss" onChange={(e) => toggleAutodismiss()} />
            <div className="flex space-x-4">
                <Button
                    label="Success"
                    onClick={() =>
                        addToast(<div>This is a toast notification!</div>, {
                            appearance: 'success',
                            autoDismiss,
                        })
                    }
                />
                <Button
                    label="Long text (i)"
                    intent="secondary"
                    onClick={() =>
                        addToast(
                            <div>
                                This is a really long toast notification that takes up more than one line!
                                This is a really long toast notification that takes up more than one line!
                            </div>,
                            {
                                appearance: 'info',
                                autoDismiss,
                            },
                        )
                    }
                />
                <Button
                    label="Platform error (e)"
                    intent="destructive"
                    onClick={() =>
                        addToast(<div>There was an error connecting to the platform.</div>, {
                            appearance: 'error',
                            autoDismiss,
                        })
                    }
                />
                <Button
                    label="Could not be found (w)"
                    intent="secondary"
                    onClick={() =>
                        addToast(<div>Someone else already moved that card. Try again.</div>, {
                            appearance: 'warning',
                            autoDismiss,
                        })
                    }
                />
            </div>
        </div>
    );
};
