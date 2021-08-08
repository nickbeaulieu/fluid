import { Meta } from '@storybook/react';
import React from 'react';
import { Portal, PortalDestination } from '.';

export default {
    title: 'Utilities/Portal',
    component: Portal,
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-4">
            <div className="w-64 space-x-1 space-y-1">
                <Portal to="anything">
                    <div className="bg-indigo-500">Rendered in a portal</div>
                </Portal>
            </div>
            <div>Portal Destination below</div>
            <div className="w-64 space-x-1 space-y-1 bg-red-600">
                <PortalDestination id="anything" />
            </div>
        </div>
    );
};
