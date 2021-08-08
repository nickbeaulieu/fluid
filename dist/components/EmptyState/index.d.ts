import React, { FC } from 'react';
export interface EmptyStateProps {
    className?: string;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: JSX.Element;
}
export declare const EmptyState: FC<EmptyStateProps>;
