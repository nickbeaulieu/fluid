import React from 'react';
import { Icons } from './types';
export interface IconProps {
    icon: Icons;
    type?: 'stroke' | 'fill';
    size?: number;
}
export declare const SvgFill: React.FC<{
    size?: number;
}>;
export declare const SvgStroke: React.FC<{
    size?: number;
}>;
export declare const Icon: React.FC<IconProps>;
