import { FC } from 'react';
import { Icons } from '../Icon/types';
export interface TooltipProps {
    className?: string;
    icon?: Icons;
}
export declare const Tooltip: FC<TooltipProps>;
