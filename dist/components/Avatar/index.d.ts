import React from 'react';
export interface AvatarProps {
    src?: string;
    initials: string;
    size?: 'small' | 'normal';
    ring?: boolean;
}
export declare const Avatar: React.FC<AvatarProps>;
