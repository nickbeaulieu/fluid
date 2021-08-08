import React, { FC, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Icon } from '../Icon';
import { Flex } from '../Flex';

export interface EmptyStateProps {
    className?: string;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: JSX.Element;
}

export const EmptyState: FC<EmptyStateProps> = (props) => {
    const { className = '', icon, title, description, action } = props;
    console.log(icon);
    return (
        <Flex center className={`${className}`}>
            <div className="space-y-2 my-4">
                <div className="w-16 h-16 text-gray-700 text-center m-auto">
                    {icon}
                </div>
                <div className="text-center font-bold text-lg">{title}</div>
                <div className="text-center max-w-sm">{description}</div>
                <div>{action}</div>
            </div>
        </Flex>
    );
};
