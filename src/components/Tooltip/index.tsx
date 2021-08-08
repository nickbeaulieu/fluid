import React, { FC } from 'react';
import { useLambda } from '../../hooks/useLambda';
import { Icon } from '../Icon';
import { Icons } from '../Icon/types';
import { Popover } from '../Popover';

export interface TooltipProps {
    className?: string;
    icon?: Icons;
}

export const Tooltip: FC<TooltipProps> = (props) => {
    const { className = '', children, icon } = props;
    const [open, setOpen] = useLambda(false);
    return (
        <Popover
            isOpen={open}
            content={
                <div
                    className={`bg-white shadow-md rounded-md text-gray-700 text-sm px-2 py-1 mb-1 ${className}`}
                >
                    {children}
                </div>
            }
            onClickOutside={setOpen(false)}
            positions={['top', 'right']}
            anchorClassName="flex self-center justify-center w-5 h-5"
        >
            <span onMouseEnter={setOpen(true)} onMouseLeave={setOpen(false)} className={`text-indigo-700 `}>
                <Icon icon={icon || 'information-circle'} type="stroke" size={20} />
            </span>
        </Popover>
    );
};
