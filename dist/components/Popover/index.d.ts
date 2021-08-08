import React from 'react';
import { TinyPopoverProps } from './internal';
export interface PopoverProps extends Omit<TinyPopoverProps, 'content'> {
    content: any;
    anchorClassName?: string;
}
export declare const Popover: React.FC<PopoverProps>;
