import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EmptyState, EmptyStateProps } from '.';
import { Text } from '../Text';
import { useToggle } from '../../hooks/useToggle';
import { Icon } from '../Icon';
import { Button } from '../Button';

export default {
    title: 'Core/EmptyState',
    component: EmptyState,
} as Meta;

export const Main = () => {
    return (
        <div>
            <EmptyState
                icon={<Icon icon="academic-cap" size={60} />}
                title="No search results"
                description="Your search did not match any sessions. Try searching for something else."
                action={
                    <Button
                        label="Start over"
                        intent="primary"
                        className="m-auto my-4"
                    />
                }
            />
        </div>
    );
};
