import React from 'react';
export interface TagProps {
    className?: string;
    intent?: 'primary' | 'secondary';
    label: string;
    onRemove?(): void;
}
export declare const Tag: React.FC<TagProps>;
